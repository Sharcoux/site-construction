import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../App.css';
import lang from '../languages';

import Button from '../components/button';

import Text from '../components/text';
import RowTable from '../components/rowTable';
import Image from '../components/image';
import Menu from '../components/menu';
import InputField from '../components/form/inputField';

import Toolbar from '../content/home/toolbar';
import Welcome from '../content/home/welcome';
import Presentation from '../content/home/presentation';
import Matheos from '../content/home/matheos';
import Features from '../content/home/features';
import Video from '../content/home/video';
import Numbers from '../content/home/numbers';
import Testimony from '../content/home/testimony';
import Contacts from '../content/home/contacts';
import Education from '../content/home/education';
import Footer from '../content/footer';

import Site from '../content';

import image from '../images/no-image.svg';
import image1 from '../images/image1.svg';
import logo from '../images/inSchool.svg';

const menus = Object.keys(lang.t('menu'));

storiesOf('Components', module)
  .add('button', () => <Button onClick={action('clicked')}>Hello</Button>)
  .add('text', () => <Text>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet euismod lorem, ac vehicula lacus euismod nec. Proin sed luctus odio. In enim purus, fringilla vel dignissim eget, iaculis quis elit. Vestibulum eleifend elit et erat viverra, sit amet varius mauris semper. Vestibulum in eleifend lectus, ut vestibulum justo. Proin malesuada elementum est, sit amet pulvinar lectus ultricies sed. Pellentesque scelerisque elit at quam porta facilisis.</p>
    <p>Pellentesque ut mauris non dolor finibus ornare. In nunc augue, sodales eget elit eget, aliquam dapibus erat. Integer sed feugiat ex, vitae tincidunt massa. Nulla neque turpis, ultricies ac imperdiet a, elementum vitae erat. Duis convallis ante ligula, in mattis nunc porta sed. Pellentesque laoreet nisi ut est aliquam molestie. Nunc dignissim ipsum leo, quis rhoncus ipsum bibendum at. Integer rutrum elit non risus lobortis gravida. Sed euismod ultricies auctor. Curabitur rhoncus nulla eu gravida hendrerit. Ut sodales feugiat purus, ut varius diam blandit ac. Sed sed congue enim. Nullam venenatis, mi non elementum tempus, risus lorem ullamcorper augue, a dignissim sem mi auctor lorem.</p>
    <p>Praesent a nunc eget odio blandit dapibus a vel lacus. Donec ac velit eget turpis gravida finibus. Proin ut mauris turpis. Nulla eleifend fringilla nisl, a porta velit. Nullam dictum vehicula fringilla. Maecenas tincidunt diam ut turpis accumsan ullamcorper. Mauris facilisis molestie tortor sit amet semper. Suspendisse sed nisi nisi. Praesent aliquam maximus justo, gravida ornare risus viverra quis. Quisque odio enim, sollicitudin sed dignissim scelerisque, ultricies at purus. Pellentesque fringilla sapien vitae nulla finibus, eu congue lectus iaculis. Maecenas risus felis, luctus sagittis eros sit amet, lacinia aliquet lorem.</p>
  </Text>)
  .add('image', () => <Image src={logo} alt={"InSchool"} title={"logo de InSchool"} />)
  .add('input field', () => <InputField type="email" name="email" />);

storiesOf('pages', module)
  .add('toolbar', () => <Toolbar />)
  .add('welcome', () => <Welcome />)
  .add('Presentation', () => <Presentation />)
  .add('MathEOS', () => <Matheos />)
  .add('Features', () => <Features />)
  .add('Video', () => <Video />)
  .add('Numbers', () => <Numbers />)
  .add('Testimony', () => <Testimony />)
  .add('Contacts', () => <Contacts />)
  .add('Education', () => <Education />)
  .add('Footer', () => <Footer />);

storiesOf('menu', module)
  .add('default', () => <Menu menus={menus} />);

storiesOf('site', module)
  .add('site', () => <Site />);