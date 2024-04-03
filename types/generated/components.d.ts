import type { Schema, Attribute } from '@strapi/strapi';

export interface AMohs extends Schema.Component {
  collectionName: 'components_a_mohs';
  info: {
    displayName: 'mohs';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.String;
    isActive: Attribute.Boolean;
    email: Attribute.Email;
    image: Attribute.Media;
    date: Attribute.Date;
    num: Attribute.Integer &
      Attribute.Unique &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 1000;
        },
        number
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'a.mohs': AMohs;
    }
  }
}
