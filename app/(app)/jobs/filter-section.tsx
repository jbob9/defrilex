const FilterSection = () => {
  return (
    <div className="rounded-lg w-full md:w-[320px] bg-white p-5">
      <div>
        <div className="mb-5 pb-4 border-b">
          <div className="mt-[30px] p-0 border-0 bg-transparent text-[#212529]">
            <h2 className="leading-none mb-0 p-0 text-xl font-bold text-[hsl(0,0%,13%)]">
              Budget
            </h2>
            <div>
              <div className="mt-6 p-0">
                <ul>
                  <li className="mb-3">
                    <div className="flex items-center gap-2">
                      <input
                        className="text-black border w-full leading-tight bg-white rounded-md py-[9px] px-4 font-normal"
                        name="min_budget"
                        type="number"
                        placeholder="Min"
                      />
                      <span className="inline-block"> to </span>
                      <input
                        className="text-black border w-full leading-tight bg-white rounded-md py-[9px] px-4 font-normal"
                        name="max_budget"
                        type="number"
                        placeholder="Max"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 pb-4 border-b">
          <h2 className="leading-none mb-0 p-0 text-xl font-bold text-[hsl(0,0%,13%)]">
            Categories
          </h2>
          <div>
            <div className="p-0 mt-6">
              <ul>
                <li className="mb-3">
                  <div className="flex flex-wrap">
                    <label
                      className="flex items-center justify-between gap-1 text-[hsl(0,0%,51%)] font-semibold pl-3 cursor-pointer text-sm w-[calc(100%-16px)]"
                      htmlFor="subcat_all"
                    >
                      <span className="text-[hsl(226,100%,33%)]"> All </span>
                      <span className="text-right min-w-[30px]"> (0) </span>
                    </label>
                  </div>
                </li>
                <li className="mb-3 text-neutral-400">
                  {" "}
                  Categories not found!
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-5 pb-4 border-b">
          <div className="mt-[30px] p-0 border-0 bg-transparent text-[#212529]">
            <h2 className="leading-none mb-0 p-0 text-xl font-bold text-[hsl(0,0%,13%)]">
              Specialities
            </h2>
            <div>
              <div className="p-0 mt-6">
                <ul>
                  <li className="mb-3 text-neutral-400">
                    {" "}
                    Speciality not found!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 pb-4 border-b">
          <div className="mt-[30px] p-0 border-0 bg-transparent text-[#212529]">
            <h2 className="leading-none mb-0 p-0 text-xl font-bold text-[hsl(0,0%,13%)]">
              Project Scope
            </h2>
            <div>
              <div className="p-0 mt-6">
                <ul>
                  <li className="mb-3">
                    <div className="flex flex-wrap">
                      <input
                        className="bg-transparent relative rounded-none cursor-pointer size-4 border shadow-none bg-center bg-contain bg-no-repeat mt-1"
                        id="large"
                        name="project_scope[]"
                        type="checkbox"
                        value="1"
                      />
                      <label
                        className="flex justify-between gap-1 font-semibold pl-3 cursor-pointer text-sm w-[calc(100%-16px)] text-[hsl(0,0%,51%)]"
                        htmlFor="large"
                      >
                        <span className="label-text"> Large </span>
                        <span className="text-right"> (0) </span>
                      </label>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="flex flex-wrap">
                      <input
                        className="bg-transparent relative rounded-none cursor-pointer size-4 border shadow-none bg-center bg-contain bg-no-repeat mt-1"
                        id="medium"
                        name="project_scope[]"
                        type="checkbox"
                        value="2"
                      />
                      <label
                        className="flex justify-between gap-1 font-semibold pl-3 cursor-pointer text-sm w-[calc(100%-16px)] text-[hsl(0,0%,51%)]"
                        htmlFor="medium"
                      >
                        <span className="label-text"> Medium </span>
                        <span className="text-right"> (0) </span>
                      </label>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="flex flex-wrap">
                      <input
                        className="bg-transparent relative rounded-none cursor-pointer size-4 border shadow-none bg-center bg-contain bg-no-repeat mt-1"
                        id="small"
                        name="project_scope[]"
                        type="checkbox"
                        value="3"
                      />
                      <label
                        className="flex justify-between gap-1 font-semibold pl-3 cursor-pointer text-sm w-[calc(100%-16px)] text-[hsl(0,0%,51%)]"
                        htmlFor="small"
                      >
                        <span className="label-text"> Small </span>
                        <span className="text-right"> (0) </span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 pb-4 border-b">
          <div className="mt-[30px] p-0 border-0 bg-transparent text-[#212529]">
            <h2 className="leading-none mb-0 p-0 text-xl font-bold text-[hsl(0,0%,13%)]">
              Experience Level{" "}
            </h2>
            <div>
              <div className="p-0 mt-6">
                <ul>
                  <li className="mb-3">
                    <div className="flex flex-wrap">
                      <input
                        className="bg-transparent relative rounded-none cursor-pointer size-4 border shadow-none bg-center bg-contain bg-no-repeat mt-1"
                        id="pro-level"
                        name="skill_level[]"
                        type="checkbox"
                        value="1"
                      />
                      <label
                        className="flex justify-between gap-1 font-semibold pl-3 cursor-pointer text-sm w-[calc(100%-16px)] text-[hsl(0,0%,51%)]"
                        htmlFor="pro-level"
                      >
                        <span className="label-text"> Pro Level</span>
                        <span className="text-right"> (0) </span>
                      </label>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="flex flex-wrap">
                      <input
                        className="bg-transparent relative rounded-none cursor-pointer size-4 border shadow-none bg-center bg-contain bg-no-repeat mt-1"
                        id="expart"
                        name="skill_level[]"
                        type="checkbox"
                        value="2"
                      />
                      <label
                        className="flex justify-between gap-1 font-semibold pl-3 cursor-pointer text-sm w-[calc(100%-16px)] text-[hsl(0,0%,51%)]"
                        htmlFor="expart"
                      >
                        <span className="label-text"> Expart </span>
                        <span className="text-right"> (0) </span>
                      </label>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="flex flex-wrap">
                      <input
                        className="bg-transparent relative rounded-none cursor-pointer size-4 border shadow-none bg-center bg-contain bg-no-repeat mt-1"
                        id="intermediate"
                        name="skill_level[]"
                        type="checkbox"
                        value="3"
                      />
                      <label
                        className="flex justify-between gap-1 font-semibold pl-3 cursor-pointer text-sm w-[calc(100%-16px)] text-[hsl(0,0%,51%)]"
                        htmlFor="intermediate"
                      >
                        <span className="label-text">Intermediate </span>
                        <span className="text-right"> (0)</span>
                      </label>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="flex flex-wrap">
                      <input
                        className="bg-transparent relative rounded-none cursor-pointer size-4 border shadow-none bg-center bg-contain bg-no-repeat mt-1"
                        id="entry"
                        name="skill_level[]"
                        type="checkbox"
                        value="4"
                      />
                      <label
                        className="flex justify-between gap-1 font-semibold pl-3 cursor-pointer text-sm w-[calc(100%-16px)] text-[hsl(0,0%,51%)]"
                        htmlFor="entry"
                      >
                        <span className="label-text">Entry </span>
                        <span className="text-right"> (0) </span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
