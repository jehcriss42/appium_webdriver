describe('sample',()=>{
    it('Test different elements',()=>{
        // AccessibilityID
        $('~App').click();
        $('~Alert Dialogs').click();
        $('~Text Entry dialog').click();
        // Custom XPATH
        $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]').addValue("Test User");
        $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]').addValue("password")
        $('//android.widget.Button[@resource-id="android:id/button1"]').click();
        driver.back();
        driver.back();
        driver.back();
    })

    it('Test scroll',()=>{
        // touchAction
        driver.touchAction([
            { action: 'press', x:500, y: 1000 },
            { action: 'moveTo', x: 500, y:700 },
            'release'
        ])
        $('~Views').click();
    })

})
