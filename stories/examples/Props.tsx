import React from 'react';
import { ArgsTable } from '@storybook/addon-docs';

type InfoProps = {
  component: React.ReactNode;
}

type ComponentProps = {
  component: React.ReactNode;
  components?: React.ReactNode[];
}

const Info: React.FC<InfoProps> = ({ component }) => {
  return (
    <div>
      <h2>{component.name}</h2>
      <ArgsTable of={component} />
    </div>
  );
}

const Props: React.FC<ComponentProps> = ({ component, components = [] }) => {
  return (
    <div>
      {component ? <Info component={component} /> : undefined}
      {components.map(c => (
        <Info component={c} />
      ))}
    </div>
  );
}

export default Props;
