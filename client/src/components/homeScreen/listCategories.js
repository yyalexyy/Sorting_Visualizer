import { COUNTRIES } from './../../constants/countryAlpha2Code.js';
import { CATEGORIES_NUM } from './../../constants/categoryNum.js';

const vDurationOptn = ["Short", "Medium", "Long", "Any"];
const dates = ["1","2", "3"];

export const LIST_COUNTRIES = COUNTRIES.map((country) => 
    <li key={country.countryName}>
        <button className="selectionBtn optionBtn" type="button" value={country.countryName}>
            {country.countryName}
        </button>
    </li>
);

export const LIST_CATEGORIES = CATEGORIES_NUM.map((catgry) =>
    <li  key={catgry.title}>
        <button className="selectionBtn optionBtn" type="button" value={catgry.title}>
            {catgry.title}
        </button>
    </li>
);

export const LIST_VIDEO_DURATIONS = vDurationOptn.map((cat) => 
    <li  key={cat}>
        <button className="selectionBtn optionBtn" type="button" value={cat}>
            {cat}
        </button>
    </li>
);

export const LIST_DATES = dates.map((cat) => 
    <li  key={cat}>
        <button className="selectionBtn optionBtn" type="button" value={cat}>
            {cat}
        </button>
    </li>
);