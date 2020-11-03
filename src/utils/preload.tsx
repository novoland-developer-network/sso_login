import React, {ReactNode} from "react";
import {Overlay} from '@fluentui/react';
import {NeutralColors, SharedColors} from '@fluentui/theme'
import './loaders.css'

type IState = {
    loaded: boolean
}

class Preload extends React.Component<{}, IState> {
    readonly state: Readonly<IState> = {
        loaded: false
    }

    render() {
        return (
            <>
            {this.state.loaded || (
                <Overlay isDarkThemed={true} style={{backgroundColor: NeutralColors.gray190}}>
                    {/*资源预加载 */}
                    <div style={{display: "none"}}>
                        {this.props.children}
                    </div>
                    {/*加载的遮罩*/}
                    <div className="mask">
                        <div className="square-spin"/>
                        <p className="ms-fontColor-orangeLight" style={{
                            color: SharedColors.redOrange10,
                            position: "absolute",
                            top: "calc(50% - 0.5rem / 2 + 0.05rem)",
                            left: "calc(50% - 1.15rem)",
                            fontSize: ".25rem",
                            lineHeight: ".25rem",
                            textAlign: "center",
                            display: "inline-block",
                            fontFamily: "cursive",
                            marginBlock: "1em",
                            fontWeight: "bold"
                        }}>广阔九州，大有可为</p>
                    </div>
                </Overlay>
            )}
        </>
        );
    }
}

export default Preload;
