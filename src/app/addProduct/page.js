//app\addProduct\page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [implementation, setImplementation] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [budget, setbudget] = useState("");
  const [year, setYear] = useState("");
  const [evaluation, setEvaluation] = useState("");
  const [strength, setStrength] = useState("");
  const [weak, setWeak] = useState("");
  const [development, setDevelopment] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !project) {
      alert("Name and project are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          project,
          implementation,
          email,
          mobile,
          budget,
          year,
          evaluation,
          strength,
          weak,
          development,
          suggestion,
        }),
      });

      if (res.ok) {
        router.push("/products");
        // router.push("/");
      } else {
        throw new Error("Failed to create a Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <Button
          variant="contained"
          color="success"
          className="text-xl font-bold px-20 py-2 mt-5"
          size="small"
        >
          เพิ่มรายการใหม่
        </Button>

        {/* <h1 className="font-bold py-10 text-2xl">Add New Product</h1> */}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-10 ml-24">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ยุทธศาสตร์ชาติ
            </label>
            {/* <div className="mt-2">
    <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="ยุทธศาสตร์ชาติ"
        />
    </div> */}

            <div className="mt-2">
              <select
                className="input input-bordered input-accent w-full max-w-xs"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="ยุทธศาสตร์ชาติ"
              >
                <option disabled selected>
                  ดัชนีแผนแม่บทด้านความมั่นคง
                </option>
                <option>ดัชนีสันติภาพโลก</option>
                <option>ดัชนีชี้วัดความสุขโลก</option>
                <option>ดัชนีสิทธิมนุษยชนและหลักนิติธรรม</option>
                <option>ดัชนีสถาบันหลัก</option>
                <option>ดัชนีเสถียรภาพทางการเมือง</option>
                <option>
                  ดัชนีการมีสิทธิ์มีเสียงของประชาชนและภาระรับผิดชอบ
                </option>
                <option>ดัชนีความปลอดภัยจากภัยคุกคาม</option>
                <option>ดัชนีความสงบสุขภาคใต้</option>
                <option>ดัชนีความแข็งแกร่งทางกำลังทหาร</option>
                <option>ดัชนีรัฐเปราะบาง</option>
                <option>
                  ดัชนีจำนวนเป้าหมายย่อยของเป้าหมายการพัฒนาที่ยั่งยืน
                  ในเป้าหมายที่ 17 บรรลุตามที่กำหนด
                </option>
                <option>
                  ระดับประสิทธิภาพการดำเนินงานของหน่วยงานด้านการจัดการความมั่นคง
                </option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              โครงการ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setProject(e.target.value)}
                value={project}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="โครงการ"
                // defaultValue="/images/1.jpg"
              />
              {/* <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              หน่วยงานที่นำไปปฏิบัติ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setImplementation(e.target.value)}
                value={implementation}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="หน่วยงานที่นำนโยบายไปปฏิบัติ"
              />
              {/* <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              อีเมล
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="อีเมล"
              />

              {/* <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              โทรศัพท์
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
                className="input input-bordered input-accent w-full max-w-xs"
                type="number"
                placeholder="โทรศัพท์"
              />

              {/* <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              งบประมาณ(ล้านบาท)
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setbudget(e.target.value)}
                value={budget}
                className="input input-bordered input-accent w-full max-w-xs"
                type="number"
                placeholder="งบประมาณ"
              />

              {/* <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ปีงบประมาณ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setYear(e.target.value)}
                value={year}
                className="input input-bordered input-accent w-full max-w-xs"
                type="number"
                placeholder="ปีงบประมาณ"
              />

              {/* <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ผลประเมิน
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEvaluation(e.target.value)}
                value={evaluation}
                className="input input-bordered input-accent w-full max-w-xs"
                type="number"
                placeholder="ผลประเมิน"
              />

              {/* <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              จุดแข็ง
            </label>
            <div className="mt-2">
              <textarea
                onChange={(e) => setStrength(e.target.value)}
                value={strength}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="จุดแข็ง"
              />

              {/* <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              จุดอ่อน
            </label>
            <div className="mt-2">
              <textarea
                onChange={(e) => setWeak(e.target.value)}
                value={weak}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="จุดอ่อน"
              />

              {/* <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              แนวทางเสริมจุดแข็ง
            </label>
            <div className="mt-2">
              <textarea
                onChange={(e) => setDevelopment(e.target.value)}
                value={development}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="แนวทางเสริมจุดแข็ง"
              />

              {/* <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
            </div>
          </div>
          {/* <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      ข้อที่ควรปรับปรุง(จุดอ่อน)
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        />

      <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div> */}
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ข้อเสนอแนะ
            </label>
            <div className="mt-2">
              <textarea
                onChange={(e) => setSuggestion(e.target.value)}
                value={suggestion}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="ข้อเสนอแนะ"
              />

              {/* <input
        type="text"
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
            </div>
          </div>
        </div>

        {/*        
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Name"
        />

        <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="/images/1.jpg"
          defaultValue="/images/1.jpg"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="input input-bordered input-accent w-full max-w-xs"
          type="number"
          placeholder="1"
          defaultValue="1"
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        /> */}

        {/* <button type="submit" className="btn btn-primary w-full max-w-xs">
          Add Product
        </button> */}
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            variant="contained"
            color="success"
            className="text-xl font-bold px-12 py-2"
            size="small"
          >
            ยืนยันเพิ่มรายการ
          </Button>
        </div>
      </form>
    </>
  );
}
