import React from "react";

export default function SocialLinks() {
  return (
    <>
      <div className="social-links mt-3">
        <aside>
          <div className="p-2 flex flex-col gap-2 bg-slate-50 ">
            <h3 className="text-2xl font-semibold my-2 text-center">Socials</h3>
            <ul class=" py-2 px-3 mt-2">
              <li className="flex gap-8 items-center justify-between my-4 border-b pb-2">
                <div>
                  <ion-icon name="earth-outline" class="w-3 h-3"></ion-icon>
                  Website:
                </div>
                <div>
                  <a href="">prakash.com</a>
                </div>
              </li>
              <li className="flex gap-8 items-center justify-between my-4 border-b pb-2">
                <div>
                  <ion-icon name="logo-github" class="w-3 h-3"></ion-icon>
                  Github:
                </div>
                <a href="">github.com/gaqlaxy</a>
              </li>

              <li className="flex gap-8 items-center justify-between my-4 pb-2">
                <div>
                  <ion-icon name="logo-linkedin" class="w-3 h-3"></ion-icon>
                  LinkedIn:
                </div>
                <a href="">linkedin.com/prakash</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
