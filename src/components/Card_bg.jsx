import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import { FiFolderPlus } from "react-icons/fi";
import Background from "./Background";

const Card_bg = () => {
  const fullscr = useRef(null);
  const [fileshow, setFileshow] = useState(true);
  const [description, setDescription] = useState("");
  const [filesize, setFilesize] = useState("");
  const [radiovalue, setRadiovalue] = useState("");
  const [carddata, setCarddata] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("carddata")) || [];
    setCarddata(storedData);
  }, []);

  const Fileshowfunction = () => {
    setFileshow(!fileshow);
  };

  const submithandling = (e) => {
    e.preventDefault();
    const newCard = { description, filesize, radiovalue };

    const updatedCardData = [...carddata, newCard];
    setCarddata(updatedCardData);
    localStorage.setItem("carddata", JSON.stringify(updatedCardData));

    setFileshow(true);
    setDescription("");
    setFilesize("");
    setRadiovalue("");
  };

  const removeCard = (index) => {
    const updatedCardData = carddata.filter((_, i) => i !== index);
    setCarddata(updatedCardData);
    localStorage.setItem("carddata", JSON.stringify(updatedCardData));
  };

  return (
    <>
      <div ref={fullscr} className="flex relative justify-stretch flex-wrap gap-4 h-screen w-screen overflow-y-scroll overflow-x-hidden custom-scrollbar bg-transparent z-10">
        <div className="flex justify-between items-center px-10 h-12 w-full bg-zinc-950 z-50">
          <h3 className="text-white text-[23px]">DocEase</h3>
          <FiFolderPlus onClick={Fileshowfunction} className="text-white text-[23px]" />
        </div>

        {carddata.map((item, index) => (
          <Card
            key={index}
            description={item.description}
            filesize={item.filesize}
            radiovalue={item.radiovalue}
            refscr={fullscr}
            remove={() => removeCard(index)} 
          />
        ))}

        {!fileshow && (
          <div className="absolute h-full w-full bg-transparent">
            <div className="relative h-full w-full flex justify-center items-center">
              <Background />
              <div className="absolute z-50 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50">
                <form
                  className="form absolute z-50 h-[80%] w-[50%] rounded-[30px] bg-black border-2 border-blue-700 flex flex-col items-center p-10"
                  onSubmit={submithandling}
                >
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    rows={4}
                    placeholder="Enter Work Details..."
                    className="text-white h-[120px] p-2 rounded-md border-blue-700 border-2 bg-transparent w-[95%]"
                  ></textarea>
                  <input
                    value={filesize}
                    onChange={(e) => setFilesize(e.target.value)}
                    type="text"
                    placeholder="Enter File Size..."
                    className="text-white h-[50px] rounded-md border-blue-700 border-2 mt-5 p-2 bg-transparent w-[95%]"
                  />
                  <h1 className="mt-5 text-blue-700">Select Any One</h1>
                  <div className="radio_block flex w-[95%] mt-5">
                    <input
                      type="radio"
                      name="choice"
                      value="Download Now"
                      onChange={(e) => setRadiovalue(e.target.value)}
                      className="h-10 w-10 ml-4"
                    />
                    <label className="text-white mt-2 ml-2">Download Now</label>
                    <input
                      type="radio"
                      name="choice"
                      value="Upload Now"
                      onChange={(e) => setRadiovalue(e.target.value)}
                      className="h-10 w-10 ml-16"
                    />
                    <label className="text-white mt-2 ml-2">Upload Now</label>
                    <input
                      type="radio"
                      name="choice"
                      value="Post Now"
                      onChange={(e) => setRadiovalue(e.target.value)}
                      className="h-10 w-10 ml-16"
                    />
                    <label className="text-white mt-2 ml-2">Post Now</label>
                  </div>
                  <button className="text-white font-semibold bg-blue-700 h-14 rounded-[10px] mt-8 w-[95%]">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card_bg;
