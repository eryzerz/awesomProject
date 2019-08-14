import React, { Component } from 'react';
import {Image,View,Text,TouchableOpacity} from 'react-native'

// export default Navbar;
class Navbar extends Component {
    state = {  }
    render() { 
        return ( <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity >
            <Image style={{width:35,height:35
                    }} source={this.props.img}/>
        </TouchableOpacity>
    </View> );
    }
}
 
export default Navbar;
