import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import '../src/style/index.sass'

import DocsDeployment from '../src/pages/DocsDeployment'
import DocsDesigns from '../src/pages/DocsDesigns'
import DocsFileStructureStatic from '../src/pages/DocsFileStructureStatic'
import DocsFileStructureReact from '../src/pages/DocsFileStructureReact'
import DocsFileStructureNext from '../src/pages/DocsFileStructureNext'
import DocsFirstPage from '../src/pages/DocsFirstPage'
import DocsProjectSetupStatic from '../src/pages/DocsProjectSetupStatic'
import DocsProjectSetupReact from '../src/pages/DocsProjectSetupReact'
import DocsProjectSetupNext from '../src/pages/DocsProjectSetupNext'
import DocsFurther from '../src/pages/DocsFurther'
import DocsIntroduction from '../src/pages/DocsIntroduction'
import DocsRequirements from '../src/pages/DocsRequirements'
import DocsThery from '../src/pages/DocsThery'
import BasicStyles from '../src/pages/BasicStyles'
import BasicStylesREADME from '../src/pages/BasicStylesREADME.md'

import AccordionEXAMPLE from '../src/components/Accordion/EXAMPLE'
import AccordionREADME from '../src/components/Accordion/README.md'
import AlertEXAMPLE from '../src/components/Alert/EXAMPLE'
import AlertREADME from '../src/components/Alert/README.md'
import BadgeEXAMPLE from '../src/components/Badge/EXAMPLE'
import BadgeREADME from '../src/components/Badge/README.md'
import BlockEXAMPLE from '../src/components/Block/EXAMPLE'
import BlockREADME from '../src/components/Block/README.md'
import BreadcrumbEXAMPLE from '../src/components/Breadcrumb/EXAMPLE'
import BreadcrumbREADME from '../src/components/Breadcrumb/README.md'
import ButtonEXAMPLE from '../src/components/Button/EXAMPLE'
import ButtonREADME from '../src/components/Button/README.md'
import CloudletEXAMPLE from '../src/components/Cloudlet/EXAMPLE'
import CloudletREADME from '../src/components/Cloudlet/README.md'
import DonutEXAMPLE from '../src/components/Donut/EXAMPLE'
import DonutREADME from '../src/components/Donut/README.md'
import DropdownEXAMPLE from '../src/components/Dropdown/EXAMPLE'
import DropdownREADME from '../src/components/Dropdown/README.md'
import FieldEXAMPLE from '../src/components/Field/EXAMPLE'
import FieldREADME from '../src/components/Field/README.md'
import Form from '../src/components/Form'
import FormREADME from '../src/components/Form/README.md'
import HamburgerNavEXAMPLE from '../src/components/HamburgerNav/EXAMPLE'
import HamburgerNavREADME from '../src/components/HamburgerNav/README.md'
import IconEXAMPLE from '../src/components/Icon/EXAMPLE'
import IconREADME from '../src/components/Icon/README.md'
import LanguageSelectEXAMPLE from '../src/components/LanguageSelect/EXAMPLE'
import LanguageSelectREADME from '../src/components/LanguageSelect/README.md'
import ListingItemEXAMPLE from '../src/components/ListingItem/EXAMPLE'
import ListingItemREADME from '../src/components/ListingItem/README.md'
import LogoEXAMPLE from '../src/components/Logo/EXAMPLE'
import LogoREADME from '../src/components/Logo/README.md'
import ModalEXAMPLE from '../src/components/Modal/EXAMPLE'
import ModalREADME from '../src/components/Modal/README.md'
import NavHorizontalEXAMPLE from '../src/components/NavHorizontal/EXAMPLE'
import NavHorizontalREADME from '../src/components/NavHorizontal/README.md'
import NavVerticalEXAMPLE from '../src/components/NavVertical/EXAMPLE'
import NavVerticalREADME from '../src/components/NavVertical/README.md'
import NavSubwayEXAMPLE from '../src/components/NavSubway/EXAMPLE'
import NavSubwayREADME from '../src/components/NavSubway/README.md'
import OwlCarouselEXAMPLE from '../src/components/OwlCarousel/EXAMPLE'
import OwlCarouselREADME from '../src/components/OwlCarousel/README.md'
import PaginationEXAMPLE from '../src/components/Pagination/EXAMPLE'
import PaginationREADME from '../src/components/Pagination/README.md'
import ParallaxEXAMPLE from '../src/components/Parallax/EXAMPLE'
import ParallaxREADME from '../src/components/Parallax/README.md'
import ProgressBarEXAMPLE from '../src/components/ProgressBar/EXAMPLE'
import ProgressBarREADME from '../src/components/ProgressBar/README.md'
import RatingEXAMPLE from '../src/components/Rating/EXAMPLE'
import RatingREADME from '../src/components/Rating/README.md'
import SocialLinksEXAMPLE from '../src/components/SocialLinks/EXAMPLE'
import SocialLinksREADME from '../src/components/SocialLinks/README.md'
import SocialSignUpEXAMPLE from '../src/components/SocialSignUp/EXAMPLE'
import SocialSignUpREADME from '../src/components/SocialSignUp/README.md'
import StepperEXAMPLE from '../src/components/Stepper/EXAMPLE'
import StepperREADME from '../src/components/Stepper/README.md'
import TabsEXAMPLE from '../src/components/Tabs/EXAMPLE'
import TabsREADME from '../src/components/Tabs/README.md'
import TagsEXAMPLE from '../src/components/Tags/EXAMPLE'
import TagsREADME from '../src/components/Tags/README.md'
import TooltipEXAMPLE from '../src/components/Tooltip/EXAMPLE'
import TooltipREADME from '../src/components/Tooltip/README.md'

addDecorator((storyFn) => (
  <div style={{ padding: '20px' }}>
    { storyFn() }
  </div>
))

storiesOf('Docs/Introduction', module)
  .add('Read', () => <DocsIntroduction />)

storiesOf('Docs/Theory of good HTML and CSS', module)
  .add('Read', () => <DocsThery />)

storiesOf('Docs/Requirements', module)
  .add('Read', () => <DocsRequirements />)

storiesOf('Docs/First project setup', module)
  .add('Static HTML', () => <DocsProjectSetupStatic />)
  .add('React', () => <DocsProjectSetupReact />)
  .add('Next', () => <DocsProjectSetupNext />)

storiesOf('Docs/File structure', module)
  .add('Static HTML', () => <DocsFileStructureStatic />)
  .add('React', () => <DocsFileStructureReact />)
  .add('Next', () => <DocsFileStructureNext />)

storiesOf('Docs/Recognition of designs', module)
  .add('Read', () => <DocsDesigns />)

storiesOf('Docs/Coding first page', module)
  .add('Static', () => <DocsFirstPage />)
  .add('React', () => <DocsFirstPage />)
  .add('Next', () => <DocsFirstPage />)

storiesOf('Docs/Further coding', module)
  .add('Static', () => <DocsFurther />)
  .add('React', () => <DocsFurther />)
  .add('Next', () => <DocsFurther />)

storiesOf('Docs/Deployment', module)
  .add('Static', () => <DocsDeployment />)
  .add('React', () => <DocsDeployment />)
  .add('Next', () => <DocsDeployment />)

storiesOf('Components/Basic styles', module)
  .addDecorator(withReadme(BasicStylesREADME))
  .add('default', () => <BasicStyles />)

storiesOf('Components/Accordion', module)
  .addDecorator(withReadme(AccordionREADME))
  .add('default', () => <AccordionEXAMPLE />)

storiesOf('Components/Alert', module)
  .addDecorator(withReadme(AlertREADME))
  .add('default', () => <AlertEXAMPLE />)

storiesOf('Components/Badge', module)
  .addDecorator(withReadme(BadgeREADME))
  .add('default', () => <BadgeEXAMPLE />)

storiesOf('Components/Block', module)
  .addDecorator(withReadme(BlockREADME))
  .add('default', () => <BlockEXAMPLE />)

storiesOf('Components/Breadcrumb', module)
  .addDecorator(withReadme(BreadcrumbREADME))
  .add('default', () => <BreadcrumbEXAMPLE />)

storiesOf('Components/Button', module)
  .addDecorator(withReadme(ButtonREADME))
  .add('default', () => <ButtonEXAMPLE />)
  .add('primary', () => <ButtonEXAMPLE variant='primary' />)
  .add('secondary', () => <ButtonEXAMPLE variant='secondary' />)
  .add('danger', () => <ButtonEXAMPLE variant='danger' />)
  .add('success', () => <ButtonEXAMPLE variant='success' />)
  .add('warning', () => <ButtonEXAMPLE variant='warning' />)
  .add('link', () => <ButtonEXAMPLE variant='link' />)

storiesOf('Components/Cloudlet', module)
  .addDecorator(withReadme(CloudletREADME))
  .add('default', () => <CloudletEXAMPLE />)

storiesOf('Components/Donut', module)
  .addDecorator(withReadme(DonutREADME))
  .add('default', () => <DonutEXAMPLE />)

storiesOf('Components/Dropdown', module)
  .addDecorator(withReadme(DropdownREADME))
  .add('default', () => <DropdownEXAMPLE />)

storiesOf('Components/Field', module)
  .addDecorator(withReadme(FieldREADME))
  .add('default', () => <FieldEXAMPLE />)


storiesOf('Components/Form', module)
  .addDecorator(withReadme(FormREADME))
  .add('default', () => <Form />)

storiesOf('Components/HamburgerNav', module)
  .addDecorator(withReadme(HamburgerNavREADME))
  .add('default', () => <HamburgerNavEXAMPLE />)

storiesOf('Components/Icon', module)
  .addDecorator(withReadme(IconREADME))
  .add('default', () => <IconEXAMPLE />)

storiesOf('Components/LanguageSelect', module)
  .addDecorator(withReadme(LanguageSelectREADME))
  .add('default', () => <LanguageSelectEXAMPLE />)

storiesOf('Components/ListingItem', module)
  .addDecorator(withReadme(ListingItemREADME))
  .add('default', () => <ListingItemEXAMPLE />)

storiesOf('Components/Logo', module)
  .addDecorator(withReadme(LogoREADME))
  .add('default', () => <LogoEXAMPLE />)

storiesOf('Components/Modal', module)
  .addDecorator(withReadme(ModalREADME))
  .add('default', () => <ModalEXAMPLE />)

storiesOf('Components/NavHorizontal', module)
  .addDecorator(withReadme(NavHorizontalREADME))
  .add('default', () => <NavHorizontalEXAMPLE />)

storiesOf('Components/NavVertical', module)
  .addDecorator(withReadme(NavVerticalREADME))
  .add('default', () => <NavVerticalEXAMPLE />)

storiesOf('Components/NavSubway', module)
  .addDecorator(withReadme(NavSubwayREADME))
  .add('default', () => <NavSubwayEXAMPLE />)

storiesOf('Components/OwlCarousel', module)
  .addDecorator(withReadme(OwlCarouselREADME))
  .add('default', () => <OwlCarouselEXAMPLE />)

storiesOf('Components/Pagination', module)
  .addDecorator(withReadme(PaginationREADME))
  .add('default', () => <PaginationEXAMPLE />)

storiesOf('Components/Parallax', module)
  .addDecorator(withReadme(ParallaxREADME))
  .add('default', () => <ParallaxEXAMPLE />)

storiesOf('Components/ProgressBar', module)
  .addDecorator(withReadme(ProgressBarREADME))
  .add('default', () => <ProgressBarEXAMPLE />)

storiesOf('Components/Rating', module)
  .addDecorator(withReadme(RatingREADME))
  .add('default', () => <RatingEXAMPLE />)

storiesOf('Components/SocialLinks', module)
  .addDecorator(withReadme(SocialLinksREADME))
  .add('default', () => <SocialLinksEXAMPLE />)

storiesOf('Components/SocialSignUp', module)
  .addDecorator(withReadme(SocialSignUpREADME))
  .add('default', () => <SocialSignUpEXAMPLE />)

storiesOf('Components/Stepper', module)
  .addDecorator(withReadme(StepperREADME))
  .add('default', () => <StepperEXAMPLE />)

storiesOf('Components/Tabs', module)
  .addDecorator(withReadme(TabsREADME))
  .add('default', () => <TabsEXAMPLE />)

storiesOf('Components/Tags', module)
  .addDecorator(withReadme(TagsREADME))
  .add('default', () => <TagsEXAMPLE />)

storiesOf('Components/Tooltip', module)
  .addDecorator(withReadme(TooltipREADME))
  .add('default', () => <TooltipEXAMPLE />)