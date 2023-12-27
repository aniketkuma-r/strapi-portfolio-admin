import type { Schema, Attribute } from '@strapi/strapi';

export interface ArrayArray extends Schema.Component {
  collectionName: 'components_array_arrays';
  info: {
    displayName: 'ShortText';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ArrayLongText extends Schema.Component {
  collectionName: 'components_array_long_texts';
  info: {
    displayName: 'LongText';
  };
  attributes: {
    LongText: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'array.array': ArrayArray;
      'array.long-text': ArrayLongText;
    }
  }
}
