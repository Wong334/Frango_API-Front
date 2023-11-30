import React from 'react';

type AbaProps = {
  label: string;
  link: string;
  ativa?: boolean;
};

const Aba: React.FC<AbaProps> = ({ label, link, ativa = false }) => {
  return (
    <a
      href={link}
      className={`text-lg no-underline ml-2 ${
        ativa ? 'text-amber-300' : 'text-gray-800 hover:text-amber-300'
      }`}
    >
      {label}
    </a>
  );
};

export default Aba;
