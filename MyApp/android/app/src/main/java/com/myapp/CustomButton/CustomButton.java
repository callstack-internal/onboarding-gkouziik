package com.myapp.CustomButton;

import android.content.Context;
import android.graphics.Color;

import androidx.appcompat.widget.AppCompatButton;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class CustomButton extends AppCompatButton {
    public CustomButton(Context context) {
        super(context);
        this.setTextColor(Color.BLACK);
        this.setOnClickListener(viewClicked -> {

            WritableMap event = Arguments.createMap();
            event.putString("action", "click");

            ReactContext reactContext = (ReactContext) getContext();
            reactContext
                    .getJSModule(RCTEventEmitter.class)
                    .receiveEvent(
                            getId(),
                            "press",
                            event
                    );

        });
    }
}
