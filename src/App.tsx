import React from 'react';
import {Image} from "@fluentui/react";

import Preload from "./utils/preload";

export const App: React.FunctionComponent = () => {
    return (
        <Preload>
            <Image src="https://cdn.doylee.cn/images/blood-moon.jpg" />
        </Preload>
    );
};