import React, { useState } from 'react';
import { AiFillEdit, AiOutlineArrowRight } from 'react-icons/ai';

function StopwatchLabel() {
  const [edit, setEdit] = useState(true);
  const [label, setLabel] = useState('Label');
  const [labelColor, setLabelColor] = useState('#eda412');

  const handleKeyDown = (e) => {
    // Enter || Esc
    if (e.keyCode === 13 || e.keyCode === 27) {
      setEdit(false);
    }
  };

  const labelBorderColorStyle = {
    color: labelColor,
    borderColor: labelColor,
  };

  return (
    <div className="relative text-2xl">
      {
        edit
          ? (
            <>
              <input
                name="stopwatchLabel"
                className="h-full rounded-lg border-none p-1 text-black"
                placeholder={!label ? 'Label' : label}
                onChange={(e) => setLabel(e.currentTarget.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                type="button"
                name="labelPicker"
                className="absolute right-1 top-1 rounded-lg bg-green-500 p-2 shadow-lg active:scale-95 active:shadow-none"
                onClick={() => setEdit(false)}
              >
                <AiOutlineArrowRight />
              </button>
              <input
                type="color"
                name="labelColorPicker"
                // eslint-disable-next-line tailwindcss/classnames-order
                className="appearance-none absolute right-12 top-[0.2rem] h-[90%] w-12 border-4 cursor-pointer"
                value={labelColor}
                onChange={(e) => setLabelColor(e.target.value)}
              />
            </>
          )
          : (
            <div
              className="flex h-full rounded-lg border px-4 pt-1"
              style={labelBorderColorStyle}
            >
              {label}
              <AiFillEdit
                className="my-2 ml-4 mr-0 cursor-pointer"
                onClick={() => setEdit(true)}
              />
            </div>
          )
      }
    </div>
  );
}

export default StopwatchLabel;
