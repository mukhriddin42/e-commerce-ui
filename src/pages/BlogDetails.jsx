import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Xatolik yuz berdi.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center text-xl">Yuklanmoqda...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!recipe) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-96 object-cover rounded-xl shadow-md"
      />

      <h1 className="text-3xl font-bold mt-6 mb-2">{recipe.name}</h1>

      <p className="text-gray-600 mb-4">
        ⏱ <strong>Pishirish vaqti:</strong> {recipe.cookTimeMinutes} daqiqa
      </p>

      <div className="bg-gray-100 p-4 rounded-xl mb-6">
        <h2 className="text-xl font-semibold mb-2">Ko'rsatmalar</h2>
        <ol className="list-decimal ml-6 space-y-2 text-gray-800">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Kerakli mahsulotlar</h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetails;
