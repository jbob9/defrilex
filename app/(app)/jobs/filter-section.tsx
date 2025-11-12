const FilterSection = () => {
  return (
    <div className="category-sidebar">
      <span className="sidebar-filter__close d-xl-none d-flex">
        <i className="las la-times"></i>
      </span>
      <div className="accordion sidebar--acordion">
        <div className="filter-block">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#budget"
                type="button"
                aria-expanded="true"
              >
                Budget{" "}
              </button>
            </h2>
            <div className="accordion-collapse show collapse" id="budget">
              <div className="accordion-body">
                <ul className="filter-block__list">
                  <li className="filter-block__item">
                    <div className="project-value">
                      <input
                        className="form--control"
                        name="min_budget"
                        type="number"
                        placeholder="Min"
                      />
                      <span className="project-value__text"> to </span>
                      <input
                        className="form--control"
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
        <div className="filter-block">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#category"
              type="button"
              aria-expanded="true"
            >
              Categories{" "}
            </button>
          </h2>
          <div className="accordion-collapse show collapse" id="category">
            <div className="accordion-body">
              <ul className="filter-block__list category">
                <li className="filter-block__item">
                  <div className="form--check">
                    <input
                      className="form-check-input"
                      id="subcat_all"
                      name="category_id"
                      type="radio"
                      value=""
                      checked
                    />
                    <label className="form-check-label" htmlFor="subcat_all">
                      <span className="label-text"> All </span>
                      <span className="label-text"> (0) </span>
                    </label>
                  </div>
                </li>
                <li className="filter-block__item"> Categories not found!</li>
                <li className="load-more-button text-end">Show more</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="filter-block">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#subcategory"
                type="button"
                aria-expanded="true"
              >
                Specialities{" "}
              </button>
            </h2>
            <div className="accordion-collapse show collapse" id="subcategory">
              <div className="accordion-body">
                <ul className="filter-block__list">
                  <li className="filter-block__item"> Speciality not found!</li>
                  <li className="load-more-button text-end">Show more</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="filter-block">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#scope"
                type="button"
                aria-expanded="true"
              >
                Project Scope{" "}
              </button>
            </h2>
            <div className="accordion-collapse show collapse" id="scope">
              <div className="accordion-body">
                <ul className="filter-block__list">
                  <li className="filter-block__item">
                    <div className="form--check">
                      <input
                        className="form-check-input"
                        id="large"
                        name="project_scope[]"
                        type="checkbox"
                        value="1"
                      />
                      <label className="form-check-label" htmlFor="large">
                        <span className="label-text"> Large </span>
                        <span className="label-text"> (0) </span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-block__item">
                    <div className="form--check">
                      <input
                        className="form-check-input"
                        id="medium"
                        name="project_scope[]"
                        type="checkbox"
                        value="2"
                      />
                      <label className="form-check-label" htmlFor="medium">
                        <span className="label-text"> Medium </span>
                        <span className="label-text"> (0) </span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-block__item">
                    <div className="form--check">
                      <input
                        className="form-check-input"
                        id="small"
                        name="project_scope[]"
                        type="checkbox"
                        value="3"
                      />
                      <label className="form-check-label" htmlFor="small">
                        <span className="label-text"> Small </span>
                        <span className="label-text"> (0) </span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="filter-block">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#level"
                type="button"
                aria-expanded="true"
              >
                Experience Level{" "}
              </button>
            </h2>
            <div className="accordion-collapse show collapse" id="level">
              <div className="accordion-body">
                <ul className="filter-block__list">
                  <li className="filter-block__item">
                    <div className="form--check">
                      <input
                        className="form-check-input"
                        id="pro-level"
                        name="skill_level[]"
                        type="checkbox"
                        value="1"
                      />
                      <label className="form-check-label" htmlFor="pro-level">
                        <span className="label-text"> Pro Level</span>
                        <span className="label-text"> (0) </span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-block__item">
                    <div className="form--check">
                      <input
                        className="form-check-input"
                        id="expart"
                        name="skill_level[]"
                        type="checkbox"
                        value="2"
                      />
                      <label className="form-check-label" htmlFor="expart">
                        <span className="label-text"> Expart </span>
                        <span className="label-text"> (0) </span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-block__item">
                    <div className="form--check">
                      <input
                        className="form-check-input"
                        id="intermediate"
                        name="skill_level[]"
                        type="checkbox"
                        value="3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="intermediate"
                      >
                        <span className="label-text">Intermediate </span>
                        <span className="label-text"> (0)</span>
                      </label>
                    </div>
                  </li>
                  <li className="filter-block__item">
                    <div className="form--check">
                      <input
                        className="form-check-input"
                        id="entry"
                        name="skill_level[]"
                        type="checkbox"
                        value="4"
                      />
                      <label className="form-check-label" htmlFor="entry">
                        <span className="label-text">Entry </span>
                        <span className="label-text"> (0) </span>
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
