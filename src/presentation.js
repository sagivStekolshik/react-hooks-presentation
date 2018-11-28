import React from 'react';
import Counter from './Counter';
import ComponentToString from './ComponentToString'
// Import Spectacle Core tags
import {
  Layout,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  CodePane,
  List,
  Fill,
  Fit,
  Quote,
  Appear,
  Slide,
  Text,
} from 'spectacle';


// Import theme
import createTheme from 'spectacle/lib/themes/default';

import counterHooksText from './textSrc/CounterHooks'

// Require CSS
require('normalize.css');

require('./index.css')

const beautify = require('js-beautify').html

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['slide','fade']} bgColor="tertiary" textColor="primary">
            <Heading fit textColor="primary" caps>
              what we want to achieve
            </Heading>
            <List>
              <ListItem>introducing hooks</ListItem>
              <ListItem>how to get started with hooks</ListItem>
              <ListItem>Rules of hooks</ListItem>
              <ListItem>why hooks or why Class is bad</ListItem>
              <ListItem>hooks examples</ListItem>
              <ListItem>hooks vs class example</ListItem>
              <ListItem>hooks in the industry(useImmer,useSpring)</ListItem>
              <ListItem>outside resource</ListItem>
              <ListItem>שאלות עם אייל</ListItem>
            </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading className="logo" fit caps textColor="primary">hooks</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Appear>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          </Appear>
          <Appear>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          </Appear>
            <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>We love Hooks <span style={{color: 'red'}}>❤</span>, Actually we love hooks so much its Unconditionally</Quote>
            <Cite>Ryan Florence</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
