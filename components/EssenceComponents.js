
import React from 'react'
import { Component } from 'react'

import Btn from 'essence-button'
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card'
import Input from 'essence-input'
import Progress from 'essence-progress'
import Toast from 'essence-toast'

class EssenceComponents extends Component {
    render() {
        return (
            <div>
                <Btn label={'Button Example'} ripple={false} type={'success'} className={'raised'} />
                <Toast classes={'e-text-white'} visible={false} delay={5000}>
                    Olha a mensagem foda-se!
                </Toast>
                <div>
                    <Card>
                        <CardHeader>
                            Card header
                        </CardHeader>
                        <CardContent>
                            Card content
                        </CardContent>
                        <CardFooter>
                            Card footer with action buttons
                        </CardFooter>
                    </Card>
                </div>
                <div>
                    <Input classes={'has-success'} type={'text'} name={'label'} placeholder={'Input + Placeholder and has-success'}/>
                    <Input classes={'has-success'} type={'text'} name={'label'} placeholder={'Input + Placeholder, has-success, Counter = 50'} counter={50}/>
                    <Input classes={'has-error'} type={'text'} name={'label'} placeholder={'Input + Placeholder, has-error, Counter = 20'} counter={20}/>
                    <Input type={'text'} name={'label'} placeholder={'Disabled input'} disabled={true}/>
                    <Input type={'text'} name={'label'} label={'Input with label'}/>
                    <Input type={'email'} name={'label'} label={'Email input'}/>
                    <Input type={'number'} name={'label'} placeholder={'Number input'} hint={'Number input'}/>
                    <Input type={'textarea'} name={'label'} rows={5} label={'Textarea + Label with 5 rows'}/>
                    <Input type={'textarea'} name={'label'} rows={3} placeholder={'Textarea + Placeholder with 3 rows'}/>
                </div>
                <div>
                    <Progress type={'circle'} />
                    <Progress type={'circle'} small={true} />
                    <Progress type={'dots'} />
                    <Progress type={'slider'} />
                </div>
            </div>
        )
    }
}
export default EssenceComponents

