export interface BlogAuthor {
  name: string;
  avatar: string;
  date: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  image: string;
  alt: string;
  author?: BlogAuthor;
  isMain?: boolean;
}
