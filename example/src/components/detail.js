import React from "react";
import PropTypes from "prop-types";
import {
	View,
	Text,
	ViewPropType
} from "react-native";

const Detail = (props) => {
	if(!props.empty)
		return (
			<View style={props.style}>
				{props.children}
			</View>
		);
	
	return (
		<View style={props.style}>
			<Text> No Item selected </Text>
		</View>
	);
};

Detail.propTypes = {
	...ViewPropType,
	children: PropTypes.node.isRequired
};

export default Detail;