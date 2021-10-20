import Document, {Html, Head, NextScript, Main} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (<Html>
            {/*<Head></Head>*/}
            <body>
                <Main></Main>
                <NextScript/>
            </body>
        </Html>)
    }
}