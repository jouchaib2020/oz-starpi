import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksParternsSection extends Schema.Component {
  collectionName: 'components_blocks_parterns_sections';
  info: {
    displayName: 'parterns-section';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    logos: Attribute.Component<'micros.image', true>;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    Problem: Attribute.String;
    numberCard: Attribute.Component<'number-card.number-card', true>;
  };
}

export interface HeroHowItWorks extends Schema.Component {
  collectionName: 'components_hero_how_it_works_s';
  info: {
    displayName: 'how it works ';
    icon: 'lightbulb';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    howitworkscard: Attribute.Component<'number-card.how-itworks-cards', true>;
  };
}

export interface MicrosImage extends Schema.Component {
  collectionName: 'components_micros_images';
  info: {
    displayName: 'partner-image';
    icon: 'expand';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    Image: Attribute.Media;
    url: Attribute.Text;
  };
}

export interface NumberCardBlogCard extends Schema.Component {
  collectionName: 'components_number_card_blog_cards';
  info: {
    displayName: 'BlogCard';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Heading: Attribute.String;
    date: Attribute.String;
    description: Attribute.Text;
  };
}

export interface NumberCardHowItworksCards extends Schema.Component {
  collectionName: 'components_number_card_how_itworks_cards';
  info: {
    displayName: 'howItworksCards';
    icon: 'check';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    de: Attribute.Text;
  };
}

export interface NumberCardNumberCard extends Schema.Component {
  collectionName: 'components_number_card_number_cards';
  info: {
    displayName: 'numberCard';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.parterns-section': BlocksParternsSection;
      'hero.hero': HeroHero;
      'hero.how-it-works': HeroHowItWorks;
      'micros.image': MicrosImage;
      'number-card.blog-card': NumberCardBlogCard;
      'number-card.how-itworks-cards': NumberCardHowItworksCards;
      'number-card.number-card': NumberCardNumberCard;
    }
  }
}
