# Anotações - Curso React (parte 2) - Validação, Rotas e Integração com API

- Para roteamento, pode-se usar a library **react-router-dom**. Podemos usar os componentes BrowserRouter, Switch e Route como no exemplo a seguir:

```javascript
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App} />
            <Route path='/sobre' component={Sobre} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
```