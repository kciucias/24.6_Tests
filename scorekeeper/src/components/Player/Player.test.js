import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.Player__name').text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
  const playerScorePassed = 5;
  const playerComponent = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = playerComponent.find('.Player__score').text();
  const playerScoreRenderedNumber = Number(playerScoreRendered);

  expect(playerScoreRenderedNumber).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange when button(+) is clicked', () => {
	const mockedOnPlayerScoreChange = jest.fn();
	const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
	const plusButton = playerComponent.find('.Player__button').at(0);
	plusButton.simulate('click');
	expect(mockedOnPlayerScoreChange).toBeCalled();
});

it('should call onPlayerScoreChange when button(-) is clicked', () => {
	const mockedOnPlayerScoreChange = jest.fn();
	const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
	const minusButton = playerComponent.find('.Player__button').at(1);
	minusButton.simulate('click');
	expect(mockedOnPlayerScoreChange).toBeCalled();
});

it('should call onPlayerRemove when button(x) is clicked', () => {
	const mockedOnPlayerRemove = jest.fn();
	const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerRemove} />);
	const deleteButton = playerComponent.find('.Player__button').at(2);
	deleteButton.simulate('click');
	expect(mockedOnPlayerRemove).toBeCalled();
});

