import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../App.css';

import Button from 'components/button';
import Button2 from 'components/button2';
import Text from 'components/text';
import Card from 'components/card';
import Card2 from 'components/card2';
import RowTable from 'components/rowTable';
import Page from 'components/page';
import Header from 'components/header';
import Header2 from 'components/header2';
import Image from 'components/image';
import Menu from 'components/menu';

import image from '../images/no-image.svg';
import logo from '../images/inSchool.svg';

const menus = ['Accueil', 'C\'est pour qui ?', 'Guides', 'Offres', 'Contacts'];

storiesOf('Button', module)
  .add('button 1 with text', () => <Button onClick={action('clicked')} title={"Hello"} />)
  .add('button 1 with icon', () => <Button style={{maxWidth:'2em'}} onClick={action('clicked')} icon={image} />)
  .add('button 2', () => <Button2 onClick={action('clicked')} title={"Hello"} />);

storiesOf('Text', module)
  .add('sample text', () => <Text>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet euismod lorem, ac vehicula lacus euismod nec. Proin sed luctus odio. In enim purus, fringilla vel dignissim eget, iaculis quis elit. Vestibulum eleifend elit et erat viverra, sit amet varius mauris semper. Vestibulum in eleifend lectus, ut vestibulum justo. Proin malesuada elementum est, sit amet pulvinar lectus ultricies sed. Pellentesque scelerisque elit at quam porta facilisis.</p>
    <p>Pellentesque ut mauris non dolor finibus ornare. In nunc augue, sodales eget elit eget, aliquam dapibus erat. Integer sed feugiat ex, vitae tincidunt massa. Nulla neque turpis, ultricies ac imperdiet a, elementum vitae erat. Duis convallis ante ligula, in mattis nunc porta sed. Pellentesque laoreet nisi ut est aliquam molestie. Nunc dignissim ipsum leo, quis rhoncus ipsum bibendum at. Integer rutrum elit non risus lobortis gravida. Sed euismod ultricies auctor. Curabitur rhoncus nulla eu gravida hendrerit. Ut sodales feugiat purus, ut varius diam blandit ac. Sed sed congue enim. Nullam venenatis, mi non elementum tempus, risus lorem ullamcorper augue, a dignissim sem mi auctor lorem.</p>
    <p>Praesent a nunc eget odio blandit dapibus a vel lacus. Donec ac velit eget turpis gravida finibus. Proin ut mauris turpis. Nulla eleifend fringilla nisl, a porta velit. Nullam dictum vehicula fringilla. Maecenas tincidunt diam ut turpis accumsan ullamcorper. Mauris facilisis molestie tortor sit amet semper. Suspendisse sed nisi nisi. Praesent aliquam maximus justo, gravida ornare risus viverra quis. Quisque odio enim, sollicitudin sed dignissim scelerisque, ultricies at purus. Pellentesque fringilla sapien vitae nulla finibus, eu congue lectus iaculis. Maecenas risus felis, luctus sagittis eros sit amet, lacinia aliquet lorem.</p>
  </Text>);

storiesOf('TextCard', module)
  .add('sample card', () => <Card image={image} text={'This is a presentation of the object inside the card'} button={'Press Me'} />)

storiesOf('rowTable', module)
  .add('Cards row', () => <RowTable>
    <Card image={image} text={'This is a presentation of the object inside the card'} button={'Press Me'} />
    <Card image={image} text={'Short description'} button={'Press Me'} />
    <Card image={image} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet euismod lorem, ac vehicula lacus euismod nec.'} button={'Press Me'} />
  </RowTable>)
  .add('Content row', () => <RowTable style={{backgroundColor: "#F8F8F8"}}>
    <Card2 image={image} text={'This is a presentation of the object inside the card'} button={'Press Me'} />
    <Card2 image={image} text={'Short description'} button={'Press Me'} />
    <Card2 image={image} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet euismod lorem, ac vehicula lacus euismod nec.'} button={'Press Me'} />
  </RowTable>);

storiesOf('page', module)
  .add('page', () => <Page background={"https://landerapp.com/blog/wp-content/uploads/2018/05/student-education.jpg"} />)
  .add('withMenu', () => (<div>
    <Menu menus={menus}/>
    <Page color={"#7ebdc1"}>
      <img src={image} alt="test"/>
      <Text color={"#FFFFFF"}>Inspiring text</Text>
    </Page>
    <Page background={"https://landerapp.com/blog/wp-content/uploads/2018/05/student-education.jpg"} fixed={true}/>
    <Page color={"#FF8000"} />
    <Page background={"https://landerapp.com/blog/wp-content/uploads/2018/05/student-education.jpg"} fixed={false}/>
    <Page color={"#0000FF"}>
      <Text color={"#FFFFFF"}>Inspiring text</Text>
      <img src={image} alt="test"/>
    </Page>
  </div>));

storiesOf('image', module)
  .add('page', () => <Image src={logo} alt={"InSchool"} title={"logo de InSchool"} />);

storiesOf('header', module)
  .add('no image', () => <Header title={"Great title"} subtitle={"This is how you make a header"} text={"Don't forget to propose a small description here"} button={"Press Me"} />)
  .add('with image', () => <Header image={"https://landerapp.com/blog/wp-content/uploads/2018/05/student-education.jpg"} title={"Great title"} subtitle={"This is how you make a header"} text={"Don't forget to propose a small description here"} button={"Press Me"} />)
  .addDecorator(story => (<div style={{height: "200vh"}}>{story()}</div>))
  .add('header 2', () => <Header2 image={"https://landerapp.com/blog/wp-content/uploads/2018/05/student-education.jpg"} title={"Great title"} subtitle={"This is how you make a header"} text={"Don't forget to propose a small description here"} button={"Press Me"} />);

storiesOf('menu', module)
  .add('default', () => <Menu menus={menus} />);