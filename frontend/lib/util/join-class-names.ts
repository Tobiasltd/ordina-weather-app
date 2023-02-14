import classnames from "classnames";

type JoinClassNames = (
  ...args: (string | false | undefined | null | { [key: string]: boolean })[]
) => string;

/* 
  This function allows us to make objects with key value pairs of classes and booleans. This works well together with tailwind classes. This function also allows us to join the classes received as a prop and join them together with classes that are defined in the component.
*/

const joinClassNames = classnames as unknown as JoinClassNames;

export { joinClassNames as cx };
export default joinClassNames;
