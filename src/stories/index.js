import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import LocationAndDateForm from '../components/LocationAndDateForm/LocationAndDateForm';
import SunActivity from '../components/SunActivity/SunActivity';

storiesOf('Sun Activity', module)
  .add('LocationAndDateForm', () => <LocationAndDateForm />)
  .add('SunActivity with times props', () => <SunActivity sunrise="07:30" sunset="20:00" />)
