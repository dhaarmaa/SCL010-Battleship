import React from 'react';
import PropTypes from 'prop-types'; 





class AllPlayers extends React.Component {
  static get propTypes () {
    return {
    	orientation: React.PropTypes.string,
    	size: React.PropTypes.number,
    	Xposition: React.PropTypes.number,
    	Yposition:React.PropTypes.number

    };
}

  static get defaultProps() {
  	return {
  		orientation: 'portrait',
  		size: 50
  	};
  }

  buildGamers() {
  	return [];
  }

  render() {
  	const styles = {
  		liPortrait: {
  			width: `${this.props.size}px`,
  			height: `${this.props.size}px`
  		},

  		liLandscape: {
  			display: 'inline',
  			listStyleType: 'none',
  			width: `${this.props.size}px`,
  			height: `${this.props.size}px`
  		},

  		imgPortrait: {
  			width: `${this.props.size}px`,
  			height: `${this.props.size}px`,
  			backgroundColor: '#55ACEE'
  		},

  		imgLandscape: {
  			width: `${this.props.size}px`,
  			height: `${this.props.size}px`,
  			WebKitTransform: 'rotate(-90deg)',
  			MozTransform: 'rotate(-90deg)',
  			OTransform: 'rotate(-90deg)',
  			MsTransform: 'rotate(-90deg)',
  			transform: 'rotate(-90deg)'
  		}
  	};

  	const orientation = this.props.orientation;
  	const gamersStyle = {};
  	const liStyle = orientation === 'portrait' ? styles.liPortrait : styles.liLandscape;
  	const imgStyle = orientation === 'portrait' ? styles.liPortrait : styles.imgLandscape;

  	if (this.props.Xposition) {
  		gamersStyle.left = `${this.props.Xposition = this.props.size}px`;
  	}

  	if (this.props.Yposition) {
  		gamersStyle.top = `${this.props.Yposition = this.props.size}px`;
  }

  	return (
  		<div className='AllGamersCss.gamers'>
  			<ul style={gamersStyle}>
  				{this.buildGamers().map((gamers, key) => {
  					return (
  						<li key= {key} style={liStyle}>
  						<img style={imgStyle} src={gamers}/>
  						</li>
  						);
  				})}
			</ul>
		</div>
  		);
	}
}



export default AllPlayers;