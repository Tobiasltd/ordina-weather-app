import { useState } from "react";
import Button from "@/components/button/button";
import { useWeather } from "@/lib/context";
import InputText from "@/components/inputs/input-text";

export interface HomeSearchProps {}

const HomeSearch: React.FC<HomeSearchProps> = ({}) => {
  const [input, setInput] = useState<string>("");
  const { setLocation } = useWeather();

  const handleInputChange = (val: string) => setInput(val);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLocation(input);
  };

  return (
    <form className="md:flex gap-[1rem]" aria-label="Location search form">
      <InputText
        placeholder="Enter Location"
        id="location"
        name="location"
        value={input}
        onChange={handleInputChange}
        aria-label="Location search input"
      />
      <Button
        disabled={!input}
        className="my-[1rem] md:my-0"
        onClick={handleSubmit}
        type="submit"
        role="button"
        aria-label="Submit location search"
      >
        Submit
      </Button>
    </form>
  );
};

export default HomeSearch;
