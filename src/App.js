import { Component } from 'react';

import styled from 'styled-components'

import './App.css';

class WhoAmI extends Component {

	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			position: ''
		}
	}

	nextYear = () => {
		console.log('+++');

		this.setState(state => ({
			years: state.years + 1
		}))
	}

	commitInputChanges = (event, color) => {

		console.log(color);

		this.setState({
			position: event.target.value
		})
	}

	render() {
		const {name, surname, link} = this.props;

		return (
			<>
				<button onClick={this.nextYear}>+++</button>
				<h1>My name is {name}, surname - {surname}, age - {this.state.years}, position - {this.state.position}</h1>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(event) => this.commitInputChanges(event, 'some color')}/>
				</form>
			</>
		)
	}
}

const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
		<WhoAmI name="John" surname="Galt" link="facebook.com"/>
		<WhoAmI name="Hank" surname="Rearden" link="instagram.com"/>
    </Wrapper>
  );
}

export default App;