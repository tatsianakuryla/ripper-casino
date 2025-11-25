import type { JSX } from 'react';

interface CowboyCasinoProsOrConsProperties {
  title: string;
  list: string[];
}

export const CowboyCasinoProsOrCons = ({
  title,
  list,
}: CowboyCasinoProsOrConsProperties): JSX.Element => {
  return (
    <div className="flex flex-col gap-[40px]">
      <h4 className="font-display font-normal text-[24px] leading-[100%] tracking-[0] uppercase align-middle">
        {title}
      </h4>
      <ul className="list-disc list-outside font-sans font-medium text-[20px] leading-[40px] tracking-[0] pl-[38px]">
        {list.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>
    </div>
  );
};
