import React from 'react';
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import '../src/style/index.sass'

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
import NavVerticalEXAMPLE from '../src/components/nav-vertical/EXAMPLE'
import NavVerticalREADME from '../src/components/nav-vertical/README.md'
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
import StepperEXAMPLE from '../src/components/Stepper/EXAMPLE'
import StepperREADME from '../src/components/Stepper/README.md'
import TabsEXAMPLE from '../src/components/Tabs/EXAMPLE'
import TabsREADME from '../src/components/Tabs/README.md'
import TagsEXAMPLE from '../src/components/tags/EXAMPLE'
import TagsREADME from '../src/components/tags/README.md'
import TooltipEXAMPLE from '../src/components/Tooltip/EXAMPLE'
import TooltipREADME from '../src/components/Tooltip/README.md'


storiesOf('Accordion',  module)
  .addDecorator(withReadme(AccordionREADME))
  .add('default', () => <AccordionEXAMPLE />)

storiesOf('Alert',  module)
  .addDecorator(withReadme(AlertREADME))
  .add('default', () => <AlertEXAMPLE />)

storiesOf('Badge',  module)
  .addDecorator(withReadme(BadgeREADME))
  .add('default', () => <BadgeEXAMPLE />)

storiesOf('Block',  module)
  .addDecorator(withReadme(BlockREADME))
  .add('default', () => <BlockEXAMPLE />)

storiesOf('Breadcrumb',  module)
  .addDecorator(withReadme(BreadcrumbREADME))
  .add('default', () => <BreadcrumbEXAMPLE />)

storiesOf('Button',  module)
  .addDecorator(withReadme(ButtonREADME))
  .add('default', () => <ButtonEXAMPLE />)

storiesOf('Cloudlet',  module)
  .addDecorator(withReadme(CloudletREADME))
  .add('default', () => <CloudletEXAMPLE />)

storiesOf('Donut',  module)
  .addDecorator(withReadme(DonutREADME))
  .add('default', () => <DonutEXAMPLE />)

storiesOf('Dropdown',  module)
  .addDecorator(withReadme(DropdownREADME))
  .add('default', () => <DropdownEXAMPLE />)

storiesOf('Field',  module)
  .addDecorator(withReadme(FieldREADME))
  .add('default', () => <FieldEXAMPLE />)

storiesOf('HamburgerNav',  module)
  .addDecorator(withReadme(HamburgerNavREADME))
  .add('default', () => <HamburgerNavEXAMPLE />)

storiesOf('Icon',  module)
  .addDecorator(withReadme(IconREADME))
  .add('default', () => <IconEXAMPLE />)

  storiesOf('LanguageSelect',  module)
  .addDecorator(withReadme(LanguageSelectREADME))
  .add('default', () => <LanguageSelectEXAMPLE />)

storiesOf('ListingItem',  module)
  .addDecorator(withReadme(ListingItemREADME))
  .add('default', () => <ListingItemEXAMPLE />)

storiesOf('Logo',  module)
  .addDecorator(withReadme(LogoREADME))
  .add('default', () => <LogoEXAMPLE />)

storiesOf('Modal',  module)
  .addDecorator(withReadme(ModalREADME))
  .add('default', () => <ModalEXAMPLE />)

storiesOf('NavHorizontal',  module)
  .addDecorator(withReadme(NavHorizontalREADME))
  .add('default', () => <NavHorizontalEXAMPLE />)

storiesOf('NavVertical',  module)
  .addDecorator(withReadme(NavVerticalREADME))
  .add('default', () => <NavVerticalEXAMPLE />)

storiesOf('NavSubway',  module)
  .addDecorator(withReadme(NavSubwayREADME))
  .add('default', () => <NavSubwayEXAMPLE />)

storiesOf('OwlCarousel',  module)
  .addDecorator(withReadme(OwlCarouselREADME))
  .add('default', () => <OwlCarouselEXAMPLE />)

storiesOf('Pagination',  module)
  .addDecorator(withReadme(PaginationREADME))
  .add('default', () => <PaginationEXAMPLE />)

storiesOf('Parallax',  module)
  .addDecorator(withReadme(ParallaxREADME))
  .add('default', () => <ParallaxEXAMPLE />)

storiesOf('ProgressBar',  module)
  .addDecorator(withReadme(ProgressBarREADME))
  .add('default', () => <ProgressBarEXAMPLE />)

storiesOf('Rating',  module)
  .addDecorator(withReadme(RatingREADME))
  .add('default', () => <RatingEXAMPLE />)

storiesOf('SocialLinks',  module)
  .addDecorator(withReadme(SocialLinksREADME))
  .add('default', () => <SocialLinksEXAMPLE />)

storiesOf('Stepper',  module)
  .addDecorator(withReadme(StepperREADME))
  .add('default', () => <StepperEXAMPLE />)

storiesOf('Tabs',  module)
  .addDecorator(withReadme(TabsREADME))
  .add('default', () => <TabsEXAMPLE />)

storiesOf('Tags',  module)
  .addDecorator(withReadme(TagsREADME))
  .add('default', () => <TagsEXAMPLE />)

storiesOf('Tooltip',  module)
  .addDecorator(withReadme(TooltipREADME))
  .add('default', () => <TooltipEXAMPLE />)