import { articles } from "../../../data.js";

export default function handler({ query: { id } }, res) {
  const article = articles.find((article) => article.id === id);

  article
    ? res.status(200).json(article)
    : res.status(404).json({ msg: `Article Nr.${id} not found` });
}
