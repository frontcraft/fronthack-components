import React from 'react'
// import logo from './logo.svg'
import './style/index.sass'
// import Alert from './components/Alert'
// import Accordion from './components/Accordion'
// import Dropdown from './components/Dropdown'
// import Field from './components/Field'
// import Icon from './components/Icon'
import Button from './components/Button'
// import Badge from './components/Badge'
// import HamburgerNav from './components/HamburgerNav'
// import Stepper from './components/Stepper'
// import LanguageSelect from './components/LanguageSelect'
// import ListingItem from './components/ListingItem'
// import Breadcrumb from './components/Breadcrumb'
// import Logo from './components/Logo'
// import Modal from './components/Modal'
import NavHorizontal from './components/NavHorizontal'
// import NavSubway from './components/NavSubway'
// import Pagination from './components/Pagination'
// import Parallax, { ParallaxGroup } from './components/Parallax'
// import ProgressBar from './components/ProgressBar'
// import Rating from './components/Rating'
// import SocialLinks from './components/SocialLinks'
// import Tabs from './components/Tabs'
import {
  Form,
  Input,
  TextArea,
  Wysiwyg,
  Select,
  MultiSelect,
  Checkbox,
  Radio,
  CheckImages,
  Range,
  ImageUpload,
} from './components/Form'

class App extends React.Component {
  state = {
    framework: 'vue',
  }
  render() {
    return (
      <div className='container'>
        <Form
          fields={[
            'username',
            'content',
            'wysiwyg',
            'framework',
            'framework-multi',
            'framework-images',
            'color',
            'car',
            'range',
            'image',
          ]}
          required={['username']}
        >
          <Input
            name='username'
            label='User name'
            type='text'
            placeholder='Enter username'
            initialValue='Michal'
            initialHelp='Required field'
          />
          <TextArea
            name='content'
            label='Content'
            placeholder='Enter content'
          />
          <Wysiwyg
            name='wysiwyg'
            label='Content'
            placeholder='Enter content'
          />
          <Select
            name='framework'
            label='Select a Framework'
            options={[
              { label: 'React', value: 'react' },
              { label: 'Vue', value: 'vue' },
              { label: 'Angluar', value: 'angluar' },
            ]}
            initialValue={this.state.framework}
            initialHelp='Select from the list'
          />
          <MultiSelect
            name='framework-multi'
            label='Select Frameworks'
            options={[
              { label: 'React', value: 'react' },
              { label: 'Vue', value: 'vue' },
              { label: 'Angluar', value: 'angluar' },
            ]}
            initialHelp='Select from the list'
          />
          <CheckImages
            name='framework-images'
            label='Select Frameworks'
            options={[
              { image: 'https://placehold.it/20x20', label: 'React', value: 'react' },
              { image: 'https://placehold.it/20x20', label: 'Vue', value: 'vue' },
              { image: 'https://placehold.it/20x20', label: 'Angluar', value: 'angluar' },
            ]}
            initialHelp='Select from the list'
          />
          <Checkbox
            name='car'
            label='Select cars'
            options={[
              { label: 'Toyota', value: 'toyota' },
              { label: 'Renault', value: 'renault' },
              { label: 'Volkswagen', value: 'volkswagen' },
            ]}
            initialHelp='You can pick a few'
          />
          <Radio
            name='color'
            label='Pick a color'
            options={[
              { label: 'Red', value: 'red' },
              { label: 'Yellow', value: 'yellow' },
              { label: 'Blue', value: 'blue' },
            ]}
            initialHelp='Choose one'
          />
          <Range
            name='range'
            label='Select amount'
            initialHelp='Select amount between range'
            step={10}
          />
          <ImageUpload
            name='image'
            label='Upload image'
          />
        </Form>
        <Button
          onClick={() => this.setState({
            framework: 'react',
          })}
        >Change to React</Button>
        {/* <Tabs labels={['First', 'Second', 'Third']}>
          {[
            <div key='1'>Content of the first tab</div>,
            <div key='2'>Content of the second tab</div>,
            <div key='3'>Content of the third tab</div>,
          ]}
        </Tabs>
        <Dropdown overlay links={[
          {
            label: 'Profile',
            url: '#',
          },
          {
            label: 'Settings',
            url: '#',
          },
          {
            label: 'Log out',
            url: '#',
          },
        ]}>Toggle dropdown</Dropdown>
        <SocialLinks url={window.location.href} />
        <Rating value={1} />
        <ProgressBar percentage={45} /> */}
        <NavHorizontal links={[
          {
            label: 'Home',
            url: '/',
          },
          {
            label: 'About',
            url: 'about',
          },
          {
            label: 'Contact',
            url: 'contact',
          },
        ]} />
        {/* <NavSubway links={[
          {
            label: 'Home',
            url: 'home',
          },
          {
            label: 'About',
            url: 'about',
          },
          {
            label: 'Contact',
            url: 'contact',
          },
        ]} />
        <Pagination
          pages={5}
          callback={item => alert(item)}
          current={3}
        />
        <Accordion items={[
          {
            title: 'First accordion item',
            content: 'Content for the first accordion',
          },
          {
            title: 'Second accordion item',
            content: 'Content for the first accordion',
          },
        ]} />
        <Modal
          size='lg'
          title='Modal title'
          trigger={<Button variant='primary'>Open modal</Button>}
          // isOpen
        >
          Modal content
        </Modal>
        <Logo />
        <Breadcrumb items={['Docs', 'Components API', 'Button']} />
        <ListingItem
          id='12345'
          title='Featured article name'
          date='16 October 2018'
          description='Teaser text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
          mediaUrl='http://placehold.it/200x145'
        />
        <LanguageSelect
          languages={[
            {
              name: 'English',
              callback: () => alert('Callback. It can be history.push or anything'),
            },
            {
              name: 'Polish',
              callback: () => alert('Callback. It can be history.push or anything'),
            },
          ]}
          current='English'
        />
        <Alert message='Example message' type='success' />
        <Stepper
          steps={['Cart', 'Shipping', 'Billing', 'Summary', 'Complete']}
          current={2}
        />
        <HamburgerNav links={[
          {
            label: 'Home',
            url: 'home',
            icon: 'home',
          },
          {
            label: 'About',
            url: 'about',
          },
          {
            label: 'Contact',
            url: 'contact',
          },
        ]} />
        <div>Test<Badge number={7} /></div>
        <div><Icon type='bell' /><Badge number={7} /></div>
        <Field label='Field label' spacing values={[
          'Multiple value',
          'Another value',
          'Third value',
        ]} />
        <Field label='Field label' inlineLabel>Single value</Field>
        <Parallax>
          <ParallaxGroup className='parallax__demo-solid'>
            <div className='parallax_demo-title'>Solid base layer</div>
          </ParallaxGroup>
          <ParallaxGroup backLayer={
            <Fragment>
              <img className='full-width' src='https://placeimg.com/640/480/nature' alt='' />
              <div className='parallax_demo-title'>Back layer</div>
            </Fragment>
          }>
            <div className='parallax_demo-title'>Transparent base layer</div>
          </ParallaxGroup>
          <ParallaxGroup className='parallax__demo-solid'>
            <div className='parallax_demo-title'>Solid base layer</div>
          </ParallaxGroup>
          <ParallaxGroup className='parallax__demo-solid'>
            <div className='parallax_demo-title'>Solid base layer</div>
          </ParallaxGroup>
        </Parallax>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    )
  }
}

export default App
