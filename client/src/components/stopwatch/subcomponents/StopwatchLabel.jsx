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
    <div className="w-full">
      {
        edit
          ? (
            <div className="grid h-12 grid-cols-12 gap-x-2 text-2xl">
              <input
                name="stopwatchLabel"
                className="col-span-8 h-full rounded-lg border-none pl-2 text-2xl text-black"
                placeholder={!label ? 'Label' : label}
                onChange={(e) => setLabel(e.currentTarget.value)}
                onKeyDown={handleKeyDown}
              />
              <input
                type="color"
                name="labelColorPicker"
                  // eslint-disable-next-line tailwindcss/classnames-order
                className="col-span-2 appearance-none w-auto h-full border-2 cursor-pointer"
                value={labelColor}
                onChange={(e) => setLabelColor(e.target.value)}
              />
              <button
                type="button"
                name="labelPicker"
                className="col-span-2 flex items-center justify-center rounded-lg bg-green-500 text-2xl shadow-sm shadow-white active:scale-95 active:shadow-none"
                onClick={() => setEdit(false)}
              >
                <AiOutlineArrowRight />
              </button>
            </div>
          )
          : (
            <div
              className="flex justify-between rounded-lg border px-2 pt-2 text-2xl"
              style={labelBorderColorStyle}
            >
              {label}
              <AiFillEdit
                className="my-2 cursor-pointer"
                onClick={() => setEdit(true)}
              />
            </div>
          )
      }
    </div>
  );
}

export default StopwatchLabel;
