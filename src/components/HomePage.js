
export default function HomePage() {
  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);

  function useDisplayImage() {
    const [result, setResult] = React.useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
          uploader(e);
        }}
      />
      {result && <img ref={imageRef} src={result} alt="" />}
    </div>
  );
}