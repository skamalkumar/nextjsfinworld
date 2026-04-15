import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: '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',
});

const REPO_OWNER = 'skamalkumar';
const REPO_NAME = 'finworldarticles';
const ARTICLE_PATH = 'content/articles';

export async function createArticleFile(title, content, category) {
  const date = new Date();
  const fileName = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
  
  const fileContent = `---
title: ${title}
date: ${date.toISOString()}
category: ${category}
---

${content}`;

  try {
    await octokit.repos.createOrUpdateFileContents({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: `${ARTICLE_PATH}/${fileName}`,
      message: `Add article: ${title}`,
      content: Buffer.from(fileContent).toString('base64'),
      branch: 'main',
    });

    return fileName;
  } catch (error) {
    console.error('Error creating article file:', error);
    throw error;
  }
}

export async function getLatestArticles(count = 3) {
  try {
    const { data: contents } = await octokit.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: ARTICLE_PATH,
      ref: 'main',
    });

    const articles = await Promise.all(
      contents
        .filter(file => file.type === 'file' && file.name.endsWith('.md'))
        .sort((a, b) => b.name.localeCompare(a.name))
        .slice(0, count)
        .map(async file => {
          const { data: content } = await octokit.repos.getContent({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            path: file.path,
            ref: 'main',
          });

          const fileContent = Buffer.from(content.content, 'base64').toString();
          const [frontMatter, ...contentParts] = fileContent.split('---\n');
          const metadata = parseFrontMatter(frontMatter);
          
          return {
            ...metadata,
            content: contentParts.join('---\n').trim(),
            fileName: file.name,
          };
        })
    );

    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
}

function parseFrontMatter(frontMatter) {
  const metadata = {};
  const lines = frontMatter.split('\n');
  
  lines.forEach(line => {
    const [key, ...values] = line.split(':');
    if (key && values.length) {
      metadata[key.trim()] = values.join(':').trim();
    }
  });
  
  return metadata;
}
