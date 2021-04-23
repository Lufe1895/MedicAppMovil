import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          navigation: props.navigation
        };
      }

    welcome = () => {
        this.props.navigation.navigate('Welcome');
    }

    login = () => {
        this.props.navigation.navigate('Login');
    }

    register = () => {
        this.props.navigation.navigate('Register');
    }
    render() {
        return(
            <Container>
                <Footer>
                    <FooterTab>
                        <Button vertical onPress={this.welcome}>
                            <Icon name="home" />
                            <Text>Bienvenida</Text>
                        </Button>

                        <Button vertical  onPress={this.login}>
                            <Icon name="person" />
                            <Text>Iniciar Sesión</Text>
                        </Button>

                        <Button vertical  onPress={this.register}>
                            <Icon name="bookmarks" />
                            <Text>Registro</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

export default Nav;