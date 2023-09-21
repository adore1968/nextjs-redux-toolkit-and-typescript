export interface CounterState {
  value: number;
}

export interface Post {
  id: number;
  name: string;
  username: string;
  email: string;
}

export type Posts = Post[];
