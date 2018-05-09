import React from 'react';
import { StyleSheet, Text, View,
    ScrollView,
    ListView,
    FlatList,
    RefreshControl,
    Dimensions,
    Button,
    Image,
    TouchableHighlight,
    Alert,
    Span, } from 'react-native';
    import TabNavigator from 'react-native-tab-navigator';
    import constantData from './data/menu.json';

    let totalWidth = Dimensions.get('window').width;
    let totalHeight = Dimensions.get('window').height;
    let price1=constantData.categories[0].products[0].price;
    let price2=constantData.categories[0].products[1].price;
    let price3=constantData.categories[0].products[2].price;
    let price4=constantData.categories[0].products[3].price;
    let price5=constantData.categories[1].products[0].price;
    let price6=constantData.categories[1].products[1].price;
    let price7=constantData.categories[1].products[2].price;
    let price8=constantData.categories[2].products[0].price;
    let price9=constantData.categories[2].products[1].price;
    let price10=constantData.categories[2].products[2].price;
    let price11=constantData.categories[2].products[3].price;
    let price12=constantData.categories[2].products[4].price;
    let nom1=constantData.categories[0].products[0].name;
    let nom2=constantData.categories[0].products[1].name;
    let nom3=constantData.categories[0].products[2].name;
    let nom4=constantData.categories[0].products[3].name;
    let nom5=constantData.categories[1].products[0].name;
    let nom6=constantData.categories[1].products[1].name;
    let nom7=constantData.categories[1].products[2].name;
    let nom8=constantData.categories[2].products[0].name;
    let nom9=constantData.categories[2].products[1].name;
    let nom10=constantData.categories[2].products[2].name;
    let nom11=constantData.categories[2].products[3].name;
    let nom12=constantData.categories[2].products[4].name;
    var price=0;
    var arr=[];

export default class App extends React.Component {
  state = {
        isRefresh: false,
    }

    _onRefresh() {
        console.log('onRefresh.');
        this.setState({isRefresh: true});
        setTimeout(() => this.setState({isRefresh: false}), 3000);
    }

    _onScroll() {
        console.log('onScroll.');
    }

    add = function(num,nom){
      price = price+num;
      arr.push(
              '\n'+nom
      );
      Alert.alert('','Vous avez choisi '+nom);
    }

    supprimer = function(num,nom){
      var index = -1;
      var name = '\n'+ nom;
      for(var i=0;i<arr.length;i++){
           if (arr[i] == name){
           index = i
           }
      }
      if(index == -1){
        Alert.alert('','Vous ne chosissez pas le plat')
      }
      else{
        price = price - num;
        arr.splice(index,1);
        Alert.alert('','Vous avez supprime le plat');
      }
    }

    price = function(){
       var info = 'Votre ordre est : '+arr+'\n'+'\n'+'Le prix toatal est '+price+'€';
       Alert.alert(`order`,info);
     }

    valider = function(){
      Alert.alert('valider','Etes-vous sur de soumettre votre menu?',
                 [{text: 'valider'},{text: 'supprimer'}])
    }
  render() {
    return (
      <View style={styles.container}>

          <Button title="Menu" onPress={()=>{this.price()}}/>
            <ScrollView
              ref={(scrollView) => {
                  _outScrollView = scrollView;
              }}
              contentContainerStyle={styles.outScrollView}
              onScroll={this._onScroll}
              scrollEventThrottle={100}
              showsVerticalScrollIndicator={true}

              refreshControl={
                  <RefreshControl refreshing={this.state.isRefresh}
                             onRefresh={this._onRefresh.bind(this)}
                             title={'load...'}
                             tintColor={'#ff0000'}
                             colors={['#ff0000', '#00ff00', '#0000ff']}
                             progressBackgroundColor={'#ffff00'}
                  />
              }
           >

           <ScrollView horizontal={true} contentContainerStyle={styles.inScrollView} showsHorizontalScrollIndicator={false} >

                <View style={styles.textstyle}>
                  <Text style={{fontSize:40}}> {constantData.categories[0].name} >></Text>
                  <Image style={{width: 0.9*totalWidth, height: 0.4 * totalHeight}} source={require('./data/boisson.jpg')}/>
                </View>

                <View style={styles.platView}>
                  <Image style={{width: 0.99*totalWidth, height: 0.4 * totalHeight}} source={{uri:'https://dummyimage.com/250x250/000/fff.jpg&text=Coca-Cola'}}/>
                  <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row',width:0.99*totalWidth}}>
                  <View style={{width: 0.5*totalWidth,backgroundColor: '#bbceee'}}>
                  <Text> {nom1}</Text>
                  <Text> price:{price1}€</Text>
                  <Text> TVA:{constantData.categories[0].products[0].tva}%</Text>
                  </View>
                  <View style={{flexDirection:'row',width: 0.5*totalWidth, alignItems:'center', justifyContent: 'center' }}>
                  <TouchableHighlight onPress={()=>{this.supprimer(price1,nom1)}} style={styles.button}>
                  <Text style={{alignItems:'center'}}>supprimer</Text>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={()=>{this.add(price1,nom1)}} style={styles.button}>
                  <Text style={{alignItems:'center'}}>add</Text>
                  </TouchableHighlight>
                  </View>
                  </View>
               </View>

               <View style={styles.platView}>
                  <Image style={{width: 0.99 * totalWidth, height: 0.4 * totalHeight}} source={{uri:'https://dummyimage.com/250x250/000/fff.jpg&text=Fanta'}}/>
                  <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row',width:0.99*totalWidth}}>
                  <View style={{width: 0.5*totalWidth,backgroundColor: '#bbceee'}}>
                  <Text> {nom2}</Text>
                  <Text> price:{price2}€</Text>
                  </View>
                  <View style={{flexDirection:'row',width: 0.5*totalWidth, alignItems:'center', justifyContent: 'center' }}>
                  <TouchableHighlight onPress={()=>{this.supprimer(price2,nom2)}} style={styles.button}>
                  <Text style={{alignItems:'center'}}>supprimer</Text>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={()=>{this.add(price2,nom2)}} style={styles.button}>
                  <Text style={{alignItems:'center'}}>add</Text>
                  </TouchableHighlight>
                  </View>
                  </View>
               </View>

              <View style={styles.platView}>
                   <Image style={{width: 0.99 * totalWidth, height: 0.4 * totalHeight}} source={{uri:'https://dummyimage.com/250x250/000/fff.jpg&text=Sprite'}}/>
                   <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row',width:0.99*totalWidth}}>
                   <View style={{width: 0.5*totalWidth,backgroundColor: '#bbceee'}}>
                   <Text> {nom3}</Text>
                   <Text> price:{price3}€</Text>
                   </View>
                   <View style={{flexDirection:'row',width: 0.5*totalWidth, alignItems:'center', justifyContent: 'center' }}>
                  <TouchableHighlight onPress={()=>{this.supprimer(price3,nom3)}} style={styles.button}>
                  <Text style={{alignItems:'center'}}>supprimer</Text>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={()=>{this.add(price3,nom3)}} style={styles.button}>
                  <Text style={{alignItems:'center'}}>add</Text>
                  </TouchableHighlight>
                  </View>
                  </View>
              </View>

              <View style={styles.platView}>
                  <Image style={{width: 0.99 * totalWidth, height: 0.4 * totalHeight}} source={{uri:'https://dummyimage.com/250x250/000/fff.jpg&text=Sprite'}}/>
                  <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row',width:0.99*totalWidth}}>
                  <View style={{width: 0.5*totalWidth,backgroundColor: '#bbceee'}}>
                  <Text> {nom4}</Text>
                  <Text> price:{price4}€</Text>
                  </View>
                  <View style={{flexDirection:'row',width: 0.5*totalWidth, alignItems:'center', justifyContent: 'center' }}>
                  <TouchableHighlight onPress={()=>{this.supprimer(price4,nom4)}} style={styles.button}>
                  <Text style={{alignItems:'center'}}>supprimer</Text>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={()=>{this.add(price4,nom4)}} style={styles.button}>
                  <Text style={{alignItems:'center'}}>add</Text>
                  </TouchableHighlight>
                  </View>
                  </View>
              </View>
            </ScrollView>

            <ScrollView horizontal={true} contentContainerStyle={styles.inScrollView} showsHorizontalScrollIndicator={false} >
                <View style={styles.textstyle}>
                    <Text style={{fontSize:40}}> {constantData.categories[1].name}>> </Text>
                    <Image style={{width: 0.9*totalWidth, height: 0.4 * totalHeight}} source={require('./data/sandwich.jpg')}/>
                </View>

                <View style={styles.platView}>
                    <Image style={{width: 0.99*totalWidth, height: 0.4 * totalHeight}} source={{uri:'https://dummyimage.com/250x250/000/fff.jpg&text=Jambon'}}/>
                    <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row',width:0.99*totalWidth}}>
                    <View style={{width: 0.5*totalWidth,backgroundColor: '#bbceee'}}>
                    <Text> {nom5}</Text>
                    <Text> price:{price5}€</Text>
                    </View>
                    <View style={{flexDirection:'row',width: 0.5*totalWidth, alignItems:'center', justifyContent: 'center' }}>
                    <TouchableHighlight onPress={()=>{this.supprimer(price5,nom5)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>supprimer</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>{this.add(price5,nom5)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>add</Text>
                    </TouchableHighlight>
                    </View>
                    </View>
                </View>

                <View style={styles.platView}>
                    <Image style={{width: 0.99 * totalWidth, height: 0.4 * totalHeight}} source={{uri:'https://dummyimage.com/250x250/000/fff.jpg&text=Baguette'}}/>
                    <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row',width:0.99*totalWidth}}>
                    <View style={{width: 0.5*totalWidth,backgroundColor: '#bbceee'}}>
                    <Text> {nom6}</Text>
                    <Text> price:{price6}€</Text>
                    </View>
                    <View style={{flexDirection:'row',width: 0.5*totalWidth, alignItems:'center', justifyContent: 'center' }}>
                    <TouchableHighlight onPress={()=>{this.supprimer(price6,nom6)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>supprimer</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>{this.add(price6,nom6)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>add</Text>
                    </TouchableHighlight>
                    </View>
                    </View>
                </View>

                <View style={styles.platView}>
                    <Image style={{width: 0.99 * totalWidth, height: 0.4 * totalHeight}} source={{uri:'https://dummyimage.com/250x250/000/fff.jpg&text=Hot-Dog'}}/>
                    <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row',width:0.99*totalWidth}}>
                    <View style={{width: 0.5*totalWidth,backgroundColor: '#bbceee'}}>
                    <Text> {nom7}</Text>
                    <Text> price:{price7}€</Text>
                    </View>
                    <View style={{flexDirection:'row',width: 0.5*totalWidth, alignItems:'center', justifyContent: 'center' }}>
                    <TouchableHighlight onPress={()=>{this.supprimer(price7,nom7)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>supprimer</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>{this.add(price7,nom7)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>add</Text>
                    </TouchableHighlight>
                    </View>
                    </View>
                </View>
            </ScrollView>

            <ScrollView horizontal={true} contentContainerStyle={styles.inScrollView} showsHorizontalScrollIndicator={false}>
                <View style={styles.textstyle}>
                    <Text style={{fontSize:40}}> {constantData.categories[2].name}>> </Text>
                    <Image style={{width: 0.9*totalWidth, height: 0.4 * totalHeight}} source={require('./data/snacks.jpg')}/>
                </View>

                <View style={styles.platView}>
                    <Image style={{width: 0.99*totalWidth, height: 0.4 * totalHeight}} source={{uri:'https://dummyimage.com/250x250/000/fff.jpg&text=Chips'}}/>
                    <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row',width:0.99*totalWidth}}>
                    <View style={{width: 0.5*totalWidth,backgroundColor: '#bbceee'}}>
                    <Text> {nom8}</Text>
                    <Text> price:{price8}€</Text>
                    </View>
                    <View style={{flexDirection:'row',width: 0.5*totalWidth, alignItems:'center', justifyContent: 'center' }}>
                    <TouchableHighlight onPress={()=>{this.supprimer(price8,nom8)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>supprimer</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>{this.add(price8,nom8)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>add</Text>
                    </TouchableHighlight>
                    </View>
                    </View>
                </View>

                <View style={styles.platView}>
                    <Image style={{width: 0.99 * totalWidth, height: 0.4 * totalHeight}} source={{uri:'https://dummyimage.com/250x250/000/fff.jpg&text=MM'}}/>
                    <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row',width:0.99*totalWidth}}>
                    <View style={{width: 0.5*totalWidth,backgroundColor: '#bbceee'}}>
                    <Text> {nom9}</Text>
                    <Text> price:{price9}€</Text>
                    </View>
                    <View style={{flexDirection:'row',width: 0.5*totalWidth, alignItems:'center', justifyContent: 'center' }}>
                    <TouchableHighlight onPress={()=>{this.supprimer(price9,nom9)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>supprimer</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>{this.add(price9,nom9)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>add</Text>
                    </TouchableHighlight>
                    </View>
                    </View>
                </View>

                <View style={styles.platView}>
                    <Image style={{width: 0.99 * totalWidth, height: 0.4 * totalHeight}} source={{uri:'https://dummyimage.com/250x250/000/fff.jpg&text=Twix'}}/>
                    <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row',width:0.99*totalWidth}}>
                    <View style={{width: 0.5*totalWidth,backgroundColor: '#bbceee'}}>
                    <Text> {nom10}</Text>
                    <Text> price:{price10}€</Text>
                    </View>
                    <View style={{flexDirection:'row',width: 0.5*totalWidth, alignItems:'center', justifyContent: 'center' }}>
                    <TouchableHighlight onPress={()=>{this.supprimer(price10,nom10)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>supprimer</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>{this.add(price10,nom10)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>add</Text>
                    </TouchableHighlight>
                    </View>
                    </View>
                </View>

                <View style={styles.platView}>
                    <Image style={{width: 0.99*totalWidth, height: 0.4 * totalHeight}} source={{uri:'https://dummyimage.com/250x250/000/fff.jpg&text=Mars'}}/>
                    <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row',width:0.99*totalWidth}}>
                    <View style={{width: 0.5*totalWidth,backgroundColor: '#bbceee'}}>
                    <Text> {nom11}</Text>
                    <Text> price:{price11}€</Text>
                    </View>
                    <View style={{flexDirection:'row',width: 0.5*totalWidth, alignItems:'center', justifyContent: 'center' }}>
                    <TouchableHighlight onPress={()=>{this.supprimer(price11,nom11)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>supprimer</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>{this.add(price11,nom11)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>add</Text>
                    </TouchableHighlight>
                    </View>
                    </View>
                </View>

                <View style={styles.platView}>
                    <Image style={{width: 0.99*totalWidth, height: 0.4 * totalHeight}} source={{uri:'https://dummyimage.com/250x250/000/fff.jpg&text=Snickers'}}/>
                    <View style={{flex:2,backgroundColor:'#bbceee',flexDirection:'row',width:0.99*totalWidth}}>
                    <View style={{width: 0.5*totalWidth,backgroundColor: '#bbceee'}}>
                    <Text> {nom12}</Text>
                    <Text> price:{price12}€</Text>
                    </View>
                    <View style={{flexDirection:'row',width: 0.5*totalWidth, alignItems:'center', justifyContent: 'center' }}>
                    <TouchableHighlight onPress={()=>{this.supprimer(price12,nom12)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>supprimer</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>{this.add(price12,nom12)}} style={styles.button}>
                    <Text style={{alignItems:'center'}}>add</Text>
                    </TouchableHighlight>
                    </View>
                    </View>
                </View>
            </ScrollView>
            <View>
                <Text>----------------------------------------------------------</Text>
                <Text>----------------------------------------------------------</Text>
            </View>
        </ScrollView>


        <TabNavigator>
              <TabNavigator.Item
                     title="ordre"
                     selectedTitleStyle={{color:'#63B8FF'}}
                     renderIcon={()=><Image style={styles.icon} source={require('./data/menu2.jpg')} />}
                    onPress={()=>{this.price()}}
                     >
             </TabNavigator.Item>

             <TabNavigator.Item
                    title="valider"
                    selectedTitleStyle={{color:'#63B8FF'}}
                    renderIcon={()=><Image style={styles.icon} source={require('./data/valider.png')} />}
                   onPress={()=>{this.valider()}}
                    >
            </TabNavigator.Item>
        </TabNavigator>

  </View>

      );
  }
}


var
  styles = StyleSheet.create({
      container: {
          flex: 1,
          height: '50%',
          backgroundColor: 'grey',
      },

      outScrollView: {
          // flex: 1,  这里指定flex的话，会出现不能上下滑动,原因在这样会把 "内容高度定死了",所以最好不要设置高度/flex，让内容的高度自适应
          justifyContent: 'center',
          backgroundColor: 'green',
      },

      inScrollView: {
          padding: 20,
          backgroundColor: 'green',
      },

      platView: {
        width: totalWidth,
        height: 0.5 * totalHeight,
        backgroundColor: '#fff1ae'
      },

      textstyle: {
        width: totalWidth,
        height: 0.5 * totalHeight,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent: 'center',
      },

      button: {
        padding:3,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 5,
        width: 0.2*totalWidth,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white'
      },

      icon:{
        width:26,
        height:26
      }
  });
  /*    <View style={styles.container}>
        <Text>Open up  to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

/*import React from 'react';
import {  Text } from 'react-native';

class HelloWorldApp extends React.Component {
  render() {
    return (
      <Text>Hello world siming!</Text>
    );
  }
}*/
