// /services/actions/comment
'use server'

export async function addComment(formData) {
  const articleId = formData.get('articleId');
  const comment = formData.get('comment');
  const response = await fetch(`https://api.example.com/articles/${articleId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ comment }),
  });
  const result = await response.json();
  return result;
}