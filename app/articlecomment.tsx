'use client'
    
import { useTransition } from 'react';
import { myAction } from './actions';

export default function ArticleComment() {
  const [isPending, startTransition] = useTransition()

    function onAddComment() {
        startTransition(() => {
            myAction('This article is nothing but great!');
    });
    }

  return (
    <button onClick={() => onAddComment()}>
      Add Comment
    </button>
  )
}