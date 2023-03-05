import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineShowChart } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { BsFillFilePersonFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    text: "Stats",
    path: "/",
    icon: <IoStatsChartSharp />,
  },
  {
    id: 2,
    text: "All Jobs",
    path: "/all-jobs",
    icon: <MdOutlineShowChart />,
  },
  {
    id: 3,
    text: "Add Job",
    path: "/add-job",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "Profile",
    path: "/profile",
    icon: <BsFillFilePersonFill />,
  },
];

export default links;
