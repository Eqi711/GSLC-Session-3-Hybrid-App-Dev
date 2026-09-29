import { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const MONO_FONT = Platform.select({
  ios: 'Menlo',
  android: 'monospace',
  default: 'monospace',
});

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userFocused, setUserFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);
  const passwordInput = useRef<TextInput>(null);

  function handleSignIn() {
    if (!username.trim() || !password) {
      setMessage('CREDENTIAL_EMPTY: OPERATOR ID AND ACCESS KEY REQUIRED.');
      return;
    }

    setMessage('TERMINAL_STANDBY: NODE AUTHENTICATION PROTOCOL UNLINKED.');
  }

  return (
    <SafeAreaView className="flex-1 bg-[#0A0A0A]">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1">
        <ScrollView
          contentContainerClassName="flex-grow justify-between px-5 py-6 sm:px-10"
          keyboardShouldPersistTaps="handled">
          
          {/* Top Telemetry Header */}
          <View>
            <View className="flex-row items-center justify-between border-b border-[#262626] pb-3">
              <View className="flex-row items-center gap-2">
                <Text style={{ fontFamily: MONO_FONT }} className="text-xs text-[#FF2A2A] font-bold">
                  +
                </Text>
                <Text style={{ fontFamily: MONO_FONT }} className="text-[11px] uppercase tracking-wider text-[#4AF626]">
                  ● SYS_ONLINE // NODE_US-09
                </Text>
              </View>
              <Text style={{ fontFamily: MONO_FONT }} className="text-[11px] uppercase tracking-widest text-[#737373]">
                REV: 4.8.2 // SEC-L5
              </Text>
            </View>

            <View className="mt-8">
              <View className="flex-row items-center gap-2">
                <View className="h-2 w-2 bg-[#FF2A2A]" />
                <Text
                  style={{ fontFamily: MONO_FONT }}
                  className="text-[10px] font-bold tracking-[2px] uppercase text-[#A3A3A3]">
                  [ PROTOCOL: APEX-GATE-99 ]
                </Text>
              </View>
              
              <Text className="mt-2 text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#EAEAEA]">
                RESTRICTED{'\n'}ACCESS
              </Text>

              <Text
                style={{ fontFamily: MONO_FONT }}
                className="mt-2 text-[11px] uppercase tracking-wider text-[#737373]">
                AUTHORIZED PERSONNEL ONLY /// HARDWARE ENCRYPTION ACTIVE
              </Text>
            </View>
          </View>

          {/* Form Blueprint Container */}
          <View className="my-8 w-full max-w-[480px] self-center border border-[#262626] bg-[#121212]">
            {/* Box Header Banner */}
            <View className="flex-row items-center justify-between border-b border-[#262626] bg-[#1A1A1A] px-4 py-2">
              <Text
                style={{ fontFamily: MONO_FONT }}
                className="text-[10px] font-bold uppercase tracking-wider text-[#EAEAEA]">
                [ AUTH_INTERFACE // TTY_01 ]
              </Text>
              <Text
                style={{ fontFamily: MONO_FONT }}
                className="text-[10px] uppercase text-[#737373]">
                SEC-ID: #8490-X
              </Text>
            </View>

            <View className="p-5 gap-5">
              {/* Field 1: Operator ID */}
              <View className="gap-2">
                <View className="flex-row justify-between items-center">
                  <Text
                    style={{ fontFamily: MONO_FONT }}
                    className="text-[11px] font-bold uppercase tracking-wider text-[#D4D4D4]">
                    &lt; 01 // OPERATOR_ID &gt;
                  </Text>
                  <Text
                    style={{ fontFamily: MONO_FONT }}
                    className="text-[10px] text-[#737373]">
                    REQUIRED
                  </Text>
                </View>
                <TextInput
                  accessibilityLabel="Operator ID"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onFocus={() => setUserFocused(true)}
                  onBlur={() => setUserFocused(false)}
                  onChangeText={(value) => {
                    setUsername(value);
                    setMessage('');
                  }}
                  onSubmitEditing={() => passwordInput.current?.focus()}
                  placeholder="USER_NAME"
                  placeholderTextColor="#404040"
                  returnKeyType="next"
                  selectionColor="#FF2A2A"
                  style={{ fontFamily: MONO_FONT }}
                  className={`min-h-[48px] rounded-none border px-3 text-sm text-[#EAEAEA] bg-[#0A0A0A] ${
                    userFocused ? 'border-[#EAEAEA]' : 'border-[#262626]'
                  }`}
                  textContentType="username"
                  value={username}
                />
              </View>

              {/* Field 2: Cryptographic Key */}
              <View className="gap-2">
                <View className="flex-row justify-between items-center">
                  <Text
                    style={{ fontFamily: MONO_FONT }}
                    className="text-[11px] font-bold uppercase tracking-wider text-[#D4D4D4]">
                    &lt; 02 // ACCESS_KEY &gt;
                  </Text>
                  <Text
                    style={{ fontFamily: MONO_FONT }}
                    className="text-[10px] text-[#737373]">
                    MASKED
                  </Text>
                </View>
                <TextInput
                  ref={passwordInput}
                  accessibilityLabel="Access Key"
                  autoCapitalize="none"
                  onFocus={() => setPassFocused(true)}
                  onBlur={() => setPassFocused(false)}
                  onChangeText={(value) => {
                    setPassword(value);
                    setMessage('');
                  }}
                  onSubmitEditing={handleSignIn}
                  placeholder="••••••••••••"
                  placeholderTextColor="#404040"
                  returnKeyType="done"
                  secureTextEntry
                  selectionColor="#FF2A2A"
                  style={{ fontFamily: MONO_FONT }}
                  className={`min-h-[48px] rounded-none border px-3 text-sm text-[#EAEAEA] bg-[#0A0A0A] ${
                    passFocused ? 'border-[#EAEAEA]' : 'border-[#262626]'
                  }`}
                  textContentType="password"
                  value={password}
                />
              </View>

              {/* Alert Feedback */}
              {message ? (
                <View className="border-l-2 border-[#FF2A2A] bg-[#1E0D0D] p-3">
                  <Text
                    accessibilityLiveRegion="polite"
                    style={{ fontFamily: MONO_FONT }}
                    className="text-[11px] font-bold uppercase tracking-wide text-[#FF5555]">
                    [ ! ] {message}
                  </Text>
                </View>
              ) : null}

              {/* Submit Trigger */}
              <Pressable
                accessibilityRole="button"
                onPress={handleSignIn}
                className="mt-2 min-h-[50px] flex-row items-center justify-center rounded-none bg-[#EAEAEA] active:bg-[#FF2A2A] px-4">
                {({ pressed }) => (
                  <Text
                    style={{ fontFamily: MONO_FONT }}
                    className={`text-xs font-black uppercase tracking-widest ${
                      pressed ? 'text-white' : 'text-[#0A0A0A]'
                    }`}>
                    INITIALIZE SESSION &gt;&gt;&gt;
                  </Text>
                )}
              </Pressable>

              {/* Telemetry Barcode Graphic */}
              <View className="mt-2 pt-3 border-t border-[#262626] flex-row items-center justify-between">
                <Text
                  style={{ fontFamily: MONO_FONT }}
                  className="text-[10px] text-[#525252] tracking-tighter">
                  ||| | ||||| || |||| ||| || | ||
                </Text>
                <Text
                  style={{ fontFamily: MONO_FONT }}
                  className="text-[9px] uppercase tracking-widest text-[#525252]">
                  DIGEST: 0x9B44F
                </Text>
              </View>
            </View>
          </View>

          {/* Bottom Telemetry & Legal Warning */}
          <View className="border-t border-[#262626] pt-4">
            <View className="flex-row justify-between items-center">
              <Text
                style={{ fontFamily: MONO_FONT }}
                className="text-[9px] uppercase tracking-wider text-[#525252]">
                CLASSIFIED DATA ENCLAVE &copy; 2026
              </Text>
              <Text
                style={{ fontFamily: MONO_FONT }}
                className="text-[9px] uppercase tracking-wider text-[#525252]">
                IP_LOGGED: 192.0.2.1
              </Text>
            </View>
            <Text
              style={{ fontFamily: MONO_FONT }}
              className="mt-1 text-[8px] uppercase tracking-tight text-[#404040]">
              WARNING: UNAUTHORIZED ACCESS VIOLATES DEFENSE DIRECTIVE 10-B. ACTIONS ARE MONITORED IN REAL-TIME.
            </Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
