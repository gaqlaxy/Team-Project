import React from "react";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";

export default function ProfileDetails() {
  return (
    <>
      <div className="max-w-screen-2xl mx-24 pt-10 px-10 pb-5">
        <Navbar />
      </div>
      <section className="max-w-screen-xl mx-24 ">
        <div className="flex">
          {/* sidebar */}
          <div className="w-[33%] ">
            <aside>
              <div className="p-5 flex flex-col items-center gap-2 bg-slate-50 ">
                <figure>
                  <img
                    src="profile.jpg"
                    alt=""
                    className="w-52 h-52 object-cover rounded-full"
                  />
                </figure>
                <figcaption>
                  <h3 className="text-2xl font-semibold my-2 text-center">
                    Name
                  </h3>
                  <p className="text-lg my-1 text-center">Designation</p>
                </figcaption>
              </div>
            </aside>
            <SocialLinks />
          </div>
          {/* Mainbar */}
          <div className="w-[77%] flex flex-col">
            <div className="hero-section rounded-sm  mx-24 bg-slate-50">
              <table className="table-fixed w-full ">
                <tbody>
                  <tr className="border-b text-center">
                    <td className="font-semibold py-5 px-12 text-gray-700">
                      Name:
                    </td>
                    <td>Prakash</td>
                  </tr>
                  <tr className="border-b text-center">
                    <td className="font-semibold py-5 px-12 text-gray-700">
                      Email:
                    </td>
                    <td>prakash.k@taxlawsonline.com</td>
                  </tr>
                  <tr className="border-b text-center">
                    <td className="font-semibold py-5 px-12 text-gray-700">
                      Mobile:
                    </td>
                    <td>123456789</td>
                  </tr>
                  <tr className="border-b text-center">
                    <td className="font-semibold py-5 px-12 text-gray-700">
                      Address:
                    </td>
                    <td>New Perungalathur, Chennai</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="">
              <div>
                <div className="skils my-5 mx-24">
                  <div class="skills bg-slate-50 p-5 text-sm tracking-wider font-normal ">
                    <div class="mt-5 mb-2 mx-3 flex items-center justify-between gap-5 ">
                      <p class="text-sm">Skill 1</p>
                      <p class="text-sm">90%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                        {" "}
                        90%
                      </div>
                    </div>
                    <div class="mt-5 mb-2 mx-3 flex items-center justify-between gap-5 ">
                      <p class="text-sm">Skill 2</p>
                      <p class="text-sm">85%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                        {" "}
                        85%
                      </div>
                    </div>
                    <div class="mt-5 mb-2 mx-3 flex items-center justify-between gap-5 ">
                      <p class="text-sm">Skill 3</p>
                      <p class="text-sm">75%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                        {" "}
                        75%
                      </div>
                    </div>
                    <div class="mt-5 mb-2 mx-3 flex items-center justify-between gap-5 ">
                      <p class="text-sm">Skill 4</p>
                      <p class="text-sm">85%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                        {" "}
                        85%
                      </div>
                    </div>
                    <div class="mt-5 mb-2 mx-3 flex items-center justify-between gap-5 ">
                      <p class="text-sm">Skill 5</p>
                      <p class="text-sm">90%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                        {" "}
                        90%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>
                <div className="skils my-5 mx-24">
                  <div class="skills bg-slate-50 p-5 text-sm tracking-wider font-normal ">
                    <div class="mt-5 mb-2 mx-3 flex items-center justify-between gap-5 ">
                      <p class="text-sm">Skill 1</p>
                      <p class="text-sm">90%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                        {" "}
                        90%
                      </div>
                    </div>
                    <div class="mt-5 mb-2 mx-3 flex items-center justify-between gap-5 ">
                      <p class="text-sm">Skill 2</p>
                      <p class="text-sm">85%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                        {" "}
                        85%
                      </div>
                    </div>
                    <div class="mt-5 mb-2 mx-3 flex items-center justify-between gap-5 ">
                      <p class="text-sm">Skill 3</p>
                      <p class="text-sm">75%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                        {" "}
                        75%
                      </div>
                    </div>
                    <div class="mt-5 mb-2 mx-3 flex items-center justify-between gap-5 ">
                      <p class="text-sm">Skill 4</p>
                      <p class="text-sm">85%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                        {" "}
                        85%
                      </div>
                    </div>
                    <div class="mt-5 mb-2 mx-3 flex items-center justify-between gap-5 ">
                      <p class="text-sm">Skill 5</p>
                      <p class="text-sm">90%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                        {" "}
                        90%
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Use this for Progres bar

/* <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
                      {" "}
                      85%
                    </div>
                  </div> */
