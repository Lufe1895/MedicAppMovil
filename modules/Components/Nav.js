import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          navigation: props.navigation
        };
      }

    movies = () => {
        this.props.navigation.navigate('Movies');
    }

    favs = () => {
        this.props.navigation.navigate('Favs');
    }

    profile = () => {
        this.props.navigation.navigate('Profile');
    }

    render() {
        return(
            <Container>
                <Footer>
                    <FooterTab>
                        <Button vertical onPress={this.movies}>
                            <Icon name="film" />
                            <Text>Películas</Text>
                        </Button>

                        <Button vertical  onPress={this.favs}>
                            <Icon name="star" />
                            <Text>Favoritos</Text>
                        </Button>

                        <Button vertical  onPress={this.profile}>
                            <Icon name="person" />
                            <Text>Perfil</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

export default Nav;