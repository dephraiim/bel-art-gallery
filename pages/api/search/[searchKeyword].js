export default async function handler(req, res) {
  const { searchKeyword } = req.query;

  const images = await fetch(
    `https://pixabay.com/api/?key=${process.env.PIXABAY_API}&q=${searchKeyword}&image_type=photo&pretty=true`
  );

  const imagesJSON = await images.json();

  res.status(200).json(imagesJSON);
}
