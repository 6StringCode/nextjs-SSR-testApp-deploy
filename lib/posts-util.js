import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { get } from 'http';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getPostsFiles() {
  //gets file names from posts directory
  return fs.readdirSync(postsDirectory)
}

export function getPostData(postIdentifier) {
  //creates slug from file name - reg expr removes file extension
  const postSlug = postIdentifier.replace(/\.md$/, '') //removes file extension
  //creates full path to file
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  //reads file contents
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  //parses metadata section with matter library - data and content are properties of the returned object provided by matter
  const { data, content } = matter(fileContent);

  //creates our own data object with slug and content
  const postData = {
    slug: postSlug,
    ...data,
    content
  }

  return postData
}

export function getAllPosts() {
  const postFiles = getPostsFiles()

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  })

  //sorts posts by date
  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

  return sortedPosts
}


export function getFeaturedPosts() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter(post => post.isFeatured)

  return featuredPosts
}