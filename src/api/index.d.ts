/**
 * The description response
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.DescriptionResponse
 */
interface DescriptionResponse {
  description: string
}

/**
 * The description request
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.DescriptionRequest
 */
interface DescriptionRequest {
  description: string
}

/**
 * The birthdate response
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.BirthdateResponse
 */
interface BirthdateResponse {
  birthMonth: number
  birthDay: number
  birthYear: number
}

/**
 * The birthdate request
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.BirthdateRequest
 */
interface BirthdateRequest {
  birthMonth: number
  birthDay: number
  birthYear: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.Web.WebAPI.ApiEmptyResponseModel
 */
interface ApiEmptyResponseModel {}

/**
 * The gender response
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.GenderResponse
 */
interface GenderResponse {
  gender: number
}

/**
 * The gender request
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.GenderRequest
 */
interface GenderRequest {
  gender: string
}

/**
 * The consecutive login days response
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.ConsecutiveLoginDaysResponse
 */
interface ConsecutiveLoginDaysResponse {
  count: number
}

/**
 * Verify Email Request
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.VerifyEmailRequest
 */
interface VerifyEmailRequest {
  ticket: string
}

/**
 * The verify email response
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.VerifyEmailResponse
 */
interface VerifyEmailResponse {
  verifiedUserHatAssetId: number
}

/**
 * The metadata response
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.MetadataResponse
 */
interface MetadataResponse {
  isAllowedNotificationsEndpointDisabled: boolean
  isAccountSettingsPolicyEnabled: boolean
  isPhoneNumberEnabled: boolean
  maxUserDescriptionLength: number
  isUserDescriptionEnabled: boolean
  isUserBlockEndpointsUpdated: boolean
}

/**
 * The phone response
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.PhoneResponse
 */
interface PhoneResponse {
  countryCode: string
  prefix: string
  phone: string
  isVerified: boolean
  verificationCodeLength: number
}

/**
 * The phone request
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.PhoneRequest
 */
interface PhoneRequest {
  countryCode: string
  prefix: string
  phone: string
  password: string
}

/**
 * Verify Phone Request
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.VerifyPhoneRequest
 */
interface VerifyPhoneRequest {
  code: string
}

/**
 * The promotion channels response
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.PromotionChannelsResponse
 */
interface PromotionChannelsResponse {
  promotionChannelsVisibilityPrivacy: string
  facebook: string
  twitter: string
  youtube: string
  twitch: string
}

/**
 * The promotion channels request
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.PromotionChannelsRequest
 */
interface PromotionChannelsRequest {
  facebook: string
  twitter: string
  youtube: string
  twitch: string
  promotionChannelsVisibilityPrivacy: string
}

/**
 * The promotion channels response
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.PromotionChannelsByUserIdResponse
 */
interface PromotionChannelsByUserIdResponse {
  facebook: string
  twitter: string
  youtube: string
  twitch: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.RobloxBadgeResponse
 */
interface RobloxBadgeResponse {
  id: number
  name: string
  description: string
  imageUrl: string
}

/**
 * The star code affiliate response
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.StarCodeAffiliateResponse
 */
interface StarCodeAffiliateResponse {
  userId: number
  name: string
  code: string
}

/**
 * The star code affiliate request
 *
 * @privateRemarks
 * Generated using:
 *   - accountinformation/v1/Roblox.AccountInformation.Api.Models.StarCodeAffiliateRequest
 */
interface StarCodeAffiliateRequest {
  code: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - assetdelivery/v1/System.Web.Http.Results.RedirectResult
 */
interface SystemWebHttpResultsRedirectResult {
  location: string
  request: Record<string, unknown> // TODO:
}

/**
 * @privateRemarks
 * Generated using:
 *   - assetdelivery/v1/Roblox.Platform.Assets.IAssetResponseItem
 */
interface IAssetResponseItem {
  location: string
  errors: IAssetItemError[]
  requestId: string
  isHashDynamic: boolean
  isCopyrightProtected: boolean
  isArchived: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - assetdelivery/v1/Roblox.Platform.Assets.IAssetItemError
 */
interface IAssetItemError {
  code: number
  message: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - assetdelivery/v1/Roblox.Web.Assets.BatchAssetRequestItem
 */
interface BatchAssetRequestItem {
  assetName: string
  assetType: string
  clientInsert: boolean
  placeId: number
  requestId: string
  scriptInsert: boolean
  serverPlaceId: number
  universeId: number
  accept: string
  encoding: string
  hash: string
  userAssetId: number
  assetId: number
  version: number
  assetVersionId: number
  modulePlaceId: number
  assetFormat: string
  'roblox-AssetFormat': string
}

/**
 * A class representing the status of Account Pin.
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.AccountPinStatusResponse
 */
interface AccountPinStatusResponse {
  isEnabled: boolean
  unlockedUntil: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Web.WebAPI.Models.ApiSuccessResponse
 */
interface ApiSuccessResponse {
  success: boolean
}

/**
 * A request model to accept pin.
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.AccountPinRequest
 */
interface AccountPinRequest {
  pin: string
}

/**
 * A response model for unlocking account pin
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.AccountPinResponse
 */
interface AccountPinResponse {
  unlockedUntil: number
}

/**
 * A response model for the security-prompt-parameters endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.AccountSecurityPromptResponse
 */
interface AccountSecurityPromptResponse {
  clearLocalPreferences: boolean
  promptType: string
  viewType: string
  dismissOption: string
}

/**
 * Model for login requests
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.LoginRequest
 */
interface LoginRequest {
  ctype: 'Email' | 'Username' | 'PhoneNumber' | 'AuthToken'
  cvalue: string
  password: string
  captchaToken: string
  captchaProvider: string
}

/**
 * A success response from a login request
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.LoginResponse
 */
interface LoginResponse {
  user: SkinnyUserResponse
  twoStepVerificationData: TwoStepVerificationSentResponse
}

/**
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Web.Responses.Users.SkinnyUserResponse
 */
interface SkinnyUserResponse {
  id: number
  name: string
  displayName: string
}

/**
 * The response model containing information about a two step verification challenge
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.TwoStepVerificationSentResponse
 */
interface TwoStepVerificationSentResponse {
  mediaType: 'Email' | 'SMS' | 'Authenticator' | 'RecoveryCode'
  ticket: string
}

/**
 * The response model containing metadata for auth.
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.AuthMetaDataResponse
 */
interface AuthMetaDataResponse {
  cookieLawNoticeTimeout: number
}

/**
 * Request model for the authentication ticket endpoints
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.RedeemAuthenticationTicketRequest
 */
interface RedeemAuthenticationTicketRequest {
  authenticationTicket: string
}

/**
 * Model for sending credentials verification requests
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.SendCredentialsVerificationMessageRequest
 */
interface SendCredentialsVerificationMessageRequest {
  credentialType: 'Email' | 'Username' | 'PhoneNumber' | 'AuthToken'
  credentialValue: string
  password: string
}

/**
 * The response model containing whether a verification message can be sent to the provided credentials.
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.CanSendCredentialsVerificationMessageResponse
 */
interface CanSendCredentialsVerificationMessageResponse {
  canSend: boolean
}

/**
 * The metadata response
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.MetadataResponse
 */
interface MetadataResponse {
  isUpdateUsernameEnabled: boolean
  ftuxAvatarAssetMap: string
  isEmailUpsellAtLogoutEnabled: boolean
  isAccountRecoveryPromptEnabled: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.PasswordChangeModel
 */
interface PasswordChangeModel {
  currentPassword: string
  newPassword: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.PasswordValidationModel
 */
interface PasswordValidationModel {
  username: string
  password: string
}

/**
 * A result representing the information about if password is valid or not.
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.PasswordValidationResponse
 */
interface PasswordValidationResponse {
  code:
    | 'ValidPassword'
    | 'WeakPasswordError'
    | 'ShortPasswordError'
    | 'PasswordSameAsUsernameError'
    | 'ForbiddenPasswordError'
    | 'DumbStringsError'
  message: string
}

/**
 * Data Response for Tencent Metadata
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.TencentMetadataResponse
 */
interface TencentMetadataResponse {
  loginPage: string
  realNameVerificationUrl: string
  isLinkingEnabled: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.QQTokenAuthenticationRequest
 */
interface QqTokenAuthenticationRequest {
  openId: string
  accessToken: string
  accessTokenExpiry: number
}

/**
 * Response Model for the Token Exchange Endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.TencentAuthResponse
 */
interface TencentAuthResponse {
  voucher: string
  gender: number
  userId: number
  displayName: string
}

/**
 * Token Exchange Request for the Token Exchange Endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.TencentTokenExchangeRequest
 */
interface TencentTokenExchangeRequest {
  code: string
  state: string
  appType: string
}

/**
 * Request model for the tencent signup without Password endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.TencentSignupWithoutPasswordRequest
 */
interface TencentSignupWithoutPasswordRequest {
  displayName: string
  agreementIds: string[]
  tencentDeveloperAppType: string
  gender: 'Unknown' | 'Male' | 'Female'
  birthday: Date
  voucher: string
}

/**
 * A response model for the Signup endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.SignupResponse
 */
interface SignupResponse {
  userId: number
  starterPlaceId: number
}

/**
 * Request model for the tencent account connect endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.TencentConnectRequest
 */
interface TencentConnectRequest {
  voucher: string
  username: string
  password: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.TencentVerifyConnectRequest
 */
interface TencentVerifyConnectRequest {
  voucher: string
  username: string
  ticket: string
  code: string
}

/**
 * Forgot Metadata Response
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.RecoveryMetadataResponse
 */
interface RecoveryMetadataResponse {
  isOnPhone: boolean
  codeLength: number
  isPhoneFeatureEnabledForUsername: boolean
  isPhoneFeatureEnabledForPassword: boolean
  isBedev2CaptchaEnabledForPasswordReset: boolean
}

/**
 * Represents the response when requesting revert account metadata
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.RevertAccountInfoResponse
 */
interface RevertAccountInfoResponse {
  isTwoStepVerificationEnabled: boolean
  isEmailVerified: boolean
  isEmailChanged: boolean
  userId: number
  username: string
  ticket: string
}

/**
 * Request Model to submit a revert account request
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.RevertAccountSubmitRequest
 */
interface RevertAccountSubmitRequest {
  userId: number
  newPassword: string
  newPasswordRepeated: string
  ticket: string
}

/**
 * A response model for a Saml2 response
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Saml.SamlAuthenticationResult
 */
interface SamlAuthenticationResult {}

/**
 * A response model for SAML2 metadata
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Saml.SamlMetadataResult
 */
interface SamlMetadataResult {}

/**
 * Request model for the Signup endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.SignupRequest
 */
interface SignupRequest {
  username: string
  password: string
  gender: 'Unknown' | 'Male' | 'Female'
  birthday: Date
  isTosAgreementBoxChecked: boolean
  email: string
  locale: string
  assetIds: number[]
  bodyColorId: number
  bodyTypeScale: number
  headScale: number
  heightScale: number
  widthScale: number
  proportionScale: number
  referralData: ReferralDataModel
  agreementIds: string[]
  identityVerificationResultToken: string
  captchaToken: string
  captchaProvider: string
}

/**
 * Model for Referral Data
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.ReferralDataModel
 */
interface ReferralDataModel {
  acquisitionTime: Date
  acquisitionReferrer: string
  medium: string
  source: string
  campaign: string
  adGroup: string
  keyword: string
  matchType: string
  sendInfo: boolean
  requestSessionId: string
  offerId: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.SocialAuthenticationDisconnectRequest
 */
interface SocialAuthenticationDisconnectRequest {
  password: string
}

/**
 * A model containing detailed information about the social user
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.SocialProvidersResponse
 */
interface SocialProvidersResponse {
  providers: ProviderInfoModel[]
}

/**
 * A model containing information of social auth provider.
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.ProviderInfoModel
 */
interface ProviderInfoModel {
  provider: string
  identifier: string
}

/**
 * 2SV metadata
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.TwoStepVerificationMetadataResponse
 */
interface TwoStepVerificationMetadataResponse {
  codeLength: number
  loadingImageUrl: string
  supportUrl: string
}

/**
 * A request model that holds two step verification ticket information
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.TwoStepVerificationTicketRequest
 */
interface TwoStepVerificationTicketRequest {
  username: string
  ticket: string
  actionType: 'Unknown' | 'Login' | 'RobuxSpend'
}

/**
 * A request model that contains information needed to verify with two step verification
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.TwoStepVerificationVerifyRequest
 */
interface TwoStepVerificationVerifyRequest {
  username: string
  ticket: string
  code: string
  rememberDevice: boolean
  actionType: 'Unknown' | 'Login' | 'RobuxSpend'
}

/**
 * The username change request
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.UsernameChangeRequest
 */
interface UsernameChangeRequest {
  username: string
  password: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.UsernameValidationRequest
 */
interface UsernameValidationRequest {
  username: string
  birthday: Date
  context: 'Unknown' | 'Signup' | 'UsernameChange'
}

/**
 * A result representing the information about if username is valid or not.
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.UsernameValidationResponse
 */
interface UsernameValidationResponse {
  code:
    | 'ValidUsername'
    | 'AlreadyInUseError'
    | 'ModerationError'
    | 'InvalidLengthError'
    | 'StartsOrEndsWithUnderscoreError'
    | 'TooManyUnderscoresError'
    | 'ContainsSpacesError'
    | 'InvalidCharactersError'
    | 'ContainsPiiError'
    | 'ContainsReservedUsernameError'
  message: string
}

/**
 * The response model to get existing usernames on Roblox
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.UsernamesResponse
 */
interface UsernamesResponse {
  usernames: string[]
}

/**
 * Request object for recover username
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.RecoverUsernameRequest
 */
interface RecoverUsernameRequest {
  targetType: 'Email' | 'PhoneNumber'
  target: string
}

/**
 * The response model for username recovery
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.RecoverUsernameResponse
 */
interface RecoverUsernameResponse {
  transmissionType: 'Sms' | 'Email'
}

/**
 * A request model to generated a username
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.RecommendedUsernameRequest
 */
interface RecommendedUsernameRequest {
  username: string
  birthday: Date
}

/**
 * A class representing the status of a Recommended Username
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.RecommendedUsernameResponse
 */
interface RecommendedUsernameResponse {
  didGenerateNewUsername: boolean
  suggestedUsername: string
}

/**
 * A request model to get if an email is valid
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.EmailValidationRequestModel
 */
interface EmailValidationRequestModel {
  email: string
}

/**
 * A class representing the status of a valid email
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.EmailValidationResponse
 */
interface EmailValidationResponse {
  isEmailValid: boolean
}

/**
 * A request to create a verified signup challenge
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.VerifiedSignupChallengeCreationRequest
 */
interface VerifiedSignupChallengeCreationRequest {
  deliveryMethod: 'Sms' | 'Email'
  deliveryTarget: string
}

/**
 * Response for successfully creating a challenge
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.VerifiedSignupChallengeCreationResponse
 */
interface VerifiedSignupChallengeCreationResponse {
  challenge: string
}

/**
 * Request to create a verified signup voucher
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.VerifiedSignupVoucherCreationRequest
 */
interface VerifiedSignupVoucherCreationRequest {
  challenge: string
  code: string
}

/**
 * Response for successfully creating a voucher
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.VerifiedSignupVoucherCreationResponse
 */
interface VerifiedSignupVoucherCreationResponse {
  voucher: string
}

/**
 * A request to sign up a user
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.VerifiedSignupUserCreationRequest
 */
interface VerifiedSignupUserCreationRequest {
  voucher: string
  birthdate: Date
  password: string
  agreementIds: string[]
}

/**
 * Token Exchange Request for the Token Exchange Endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.TencentTokenAuthenticationRequest
 */
interface TencentTokenAuthenticationRequest {
  openId: string
  accessToken: string
  accessTokenExpiry: number
  refreshToken: string
  refreshTokenExpiry: number
}

/**
 * Request model for the Roblox Account Create endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.RobloxAccountCreateRequest
 */
interface RobloxAccountCreateRequest {
  unionId: string
  displayName: string
  birthday: Date
}

/**
 * Response model for the Roblox Account Create endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v1/Roblox.Authentication.Api.Models.RobloxAccountCreateResponse
 */
interface RobloxAccountCreateResponse {
  userId: number
  isSuccess: boolean
  reason: string
}

/**
 * The request model for sending a password reset request
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.SendResetPasswordRequest
 */
interface SendResetPasswordRequest {
  targetType: 'Email' | 'PhoneNumber'
  target: string
  captchaToken: string
  captchaProvider: string
}

/**
 * Wraps the response for a forgot password request
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.SendResetPasswordResponse
 */
interface SendResetPasswordResponse {
  nonce: string
  transmissionType: 'Sms' | 'Email'
}

/**
 * A verification model
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.PasswordResetVerificationRequest
 */
interface PasswordResetVerificationRequest {
  targetType: 'Email' | 'PhoneNumber'
  nonce: string
  code: string
}

/**
 * A response to a verification action
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.PasswordResetVerificationResponse
 */
interface PasswordResetVerificationResponse {
  userTickets: ForgotPasswordUserResponse[]
}

/**
 * A tuple of {Roblox.Web.Responses.Users.LegacyUserResponse} and its ticket
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.ForgotPasswordUserResponse
 */
interface ForgotPasswordUserResponse {
  user: LegacyUserResponse
  ticket: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Web.Responses.Users.LegacyUserResponse
 */
interface LegacyUserResponse {
  userId: number
  username: string
  displayName: string
}

/**
 * The request model for getting the reset password metadata from a target type and ticket
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.GetPasswordResetMetadataRequest
 */
interface GetPasswordResetMetadataRequest {
  targetType: 'Email' | 'PhoneNumber'
  ticket: string
}

/**
 * The metadata needed for the password reset view
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.PasswordResetMetadataResponse
 */
interface PasswordResetMetadataResponse {
  users: LegacyUserResponse[]
}

/**
 * A model containing information to reset a password with a ticket.
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.PasswordResetModel
 */
interface PasswordResetModel {
  targetType: 'Email' | 'PhoneNumber'
  ticket: string
  userId: number
  password: string
  passwordRepeated: string
}

/**
 * Response model with password status
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.PasswordStatusResponse
 */
interface PasswordStatusResponse {
  valid: boolean
}

/**
 * Data Response for WeChat Metadata
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.WeChatMetadataResponse
 */
interface WeChatMetadataResponse {
  loginPage: string
}

/**
 * WeChat Token Exchange Request for the Token Exchange Endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.WeChatTokenAuthenticationRequest
 */
interface WeChatTokenAuthenticationRequest {
  openId: string
  accessToken: string
  accessTokenExpiry: number
  refreshToken: string
  refreshTokenExpiry: number
}

/**
 * Response Model for the Token Exchange Endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.WeChatAuthResponse
 */
interface WeChatAuthResponse {
  weChatVoucher: string
  gender: number
  userId: number
}

/**
 * WeChat Token Exchange Request for the Token Exchange Endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.WeChatTokenExchangeRequest
 */
interface WeChatTokenExchangeRequest {
  code: string
  state: string
}

/**
 * Request model for the WeChat Signup endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.WeChatSignupRequest
 */
interface WeChatSignupRequest {
  weChatVoucher: string
  username: string
  password: string
  gender: 'Unknown' | 'Male' | 'Female'
  birthday: Date
}

/**
 * A response model for the WeChatV2 Signup endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v2/Roblox.Authentication.Api.Models.WeChatSignupResponse
 */
interface WeChatSignupResponse {
  checkHeartbeatAfterWeChatSignup: boolean
  userId: number
  starterPlaceId: number
}

/**
 * Request model for the /v3/signup endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v3/Roblox.Authentication.Api.Models.SignupV3Request
 */
interface SignupV3Request {
  username: string
  password: string
  birthdate: Date
  bundleId: number
  locale: string
  agreementIds: string[]
  captchaToken: string
  captchaProvider: string
}

/**
 * Request model for the /v3/signup/verified endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v3/Roblox.Authentication.Api.Models.VerifiedSignupV3Request
 */
interface VerifiedSignupV3Request {
  voucher: string
  username: string
  password: string
  birthdate: Date
  bundleId: number
  locale: string
  agreementIds: string[]
}

/**
 * The response model for the bundles needed for signup
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v3/Roblox.Authentication.Api.Models.SignupBundlesResponse
 */
interface SignupBundlesResponse {
  bundles: BundleResponse[]
}

/**
 * Api response model to represent a bundle
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v3/Roblox.Authentication.Api.Models.BundleResponse
 */
interface BundleResponse {
  bundleId: number
  userOutfitId: number
}

/**
 * Request parameters for logging in via two step verification.
 *
 * @privateRemarks
 * Generated using:
 *   - auth/v3/Roblox.Authentication.Api.TwoStepVerificationLoginRequest
 */
interface TwoStepVerificationLoginRequest {
  challengeId: string
  verificationToken: string
  rememberDevice: boolean
}

/**
 * A model containing website metadata for avatars
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.AvatarMetadataModel
 */
interface AvatarMetadataModel {
  enableDefaultClothingMessage: boolean
  isAvatarScaleEmbeddedInTab: boolean
  isBodyTypeScaleOutOfTab: boolean
  scaleHeightIncrement: number
  scaleWidthIncrement: number
  scaleHeadIncrement: number
  scaleProportionIncrement: number
  scaleBodyTypeIncrement: number
  supportProportionAndBodyType: boolean
  showDefaultClothingMessageOnPageLoad: boolean
  areThreeDeeThumbsEnabled: boolean
}

/**
 * A model containing details about avatar-related business rules
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.AvatarRulesModel
 */
interface AvatarRulesModel {
  playerAvatarTypes: string[]
  scales: ScaleRulesModel
  wearableAssetTypes: AssetTypeRulesModel[]
  bodyColorsPalette: BodyColorModel[]
  basicBodyColorsPalette: BodyColorModel[]
  minimumDeltaEBodyColorDifference: number
  proportionsAndBodyTypeEnabledForUser: boolean
  defaultClothingAssetLists: DefaultClothingAssets
  bundlesEnabledForUser: boolean
  emotesEnabledForUser: boolean
}

/**
 * A model that contains information about the max/mins for each scale
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.ScaleRulesModel
 */
interface ScaleRulesModel {
  min: number
  max: number
  increment: number
}

/**
 * A model containing details about an asset type and its business rules
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.AssetTypeRulesModel
 */
interface AssetTypeRulesModel {
  maxNumber: number
  id: number
  name: string
}

/**
 * A model container BrickColor ids for each body part.
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.BodyColorModel
 */
interface BodyColorModel {
  brickColorId: number
  hexColor: string
  name: string
}

/**
 * A model containing details about avatar-related business rules
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.DefaultClothingAssets
 */
interface DefaultClothingAssets {
  defaultShirtAssetIds: number[]
  defaultPantAssetIds: number[]
}

/**
 * A model containing details about an avatar
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.AvatarModel
 */
interface AvatarModel {
  scales: ScaleModel
  playerAvatarType: 'R6' | 'R15'
  bodyColors: BodyColorsModel
  assets: AssetModel[]
  defaultShirtApplied: boolean
  defaultPantsApplied: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Web.Responses.Avatar.ScaleModel
 */
interface ScaleModel {
  height: number
  width: number
  head: number
  depth: number
  proportion: number
  bodyType: number
}

/**
 * A model container BrickColor ids for each body part.
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.BodyColorsModel
 */
interface BodyColorsModel {
  headColorId: number
  torsoColorId: number
  rightArmColorId: number
  leftArmColorId: number
  rightLegColorId: number
  leftLegColorId: number
}

/**
 * A model containing details about an asset
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.AssetModel
 */
interface AssetModel {
  id: number
  name: string
  assetType: AssetTypeModel
}

/**
 * A model containing details about an asset type
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.AssetTypeModel
 */
interface AssetTypeModel {
  id: number
  name: string
}

/**
 * A model that contains a playerAvatarType
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.PlayerAvatarTypeModel
 */
interface PlayerAvatarTypeModel {
  playerAvatarType: 'R6' | 'R15'
}

/**
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.AvatarFetchModel
 */
interface AvatarFetchModel {
  resolvedAvatarType: string
  equippedGearVersionIds: number[]
  backpackGearVersionIds: number[]
  assetAndAssetTypeIds: AssetIdAndTypeModel[]
  animationAssetIds: number
  bodyColors: BodyColorsModel
  scales: ScaleModel
}

/**
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.AssetIdAndTypeModel
 */
interface AssetIdAndTypeModel {
  assetId: number
  assetTypeId: number
}

/**
 * A model that contains a list of asset ids
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.AssetIdListModel
 */
interface AssetIdListModel {
  assetIds: number[]
}

/**
 * A model for wear outfit responses
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.WearResponseModel
 */
interface WearResponseModel {
  invalidAssets: AssetModel[]
  invalidAssetIds: number[]
  success: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.AvatarFilteredPageResponse[Roblox.Api.Avatar.Models.OutfitModel]
 */
interface AvatarFilteredPageResponse {
  filteredCount: number
  data: OutfitModel[]
  total: number
}

/**
 * A slim model for user outfits
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.OutfitModel
 */
interface OutfitModel {
  id: number
  name: string
  isEditable: boolean
}

/**
 * Empty response, will be in WebAPI base soon
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Controllers.V1.AvatarController.EmptyResponse
 */
interface EmptyResponse {}

/**
 * Response object representing a user's emote
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.EmoteResponseModel
 */
interface EmoteResponseModel {
  assetId: number
  assetName: string
  position: number
}

/**
 * Request model to equip a emote
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.EmoteRequestModel
 */
interface EmoteRequestModel {
  assetId: number
  position: number
}

/**
 * Response model for set all emotes
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.SetAllEmotesResponseModel
 */
interface SetAllEmotesResponseModel {
  invalidEmotes: InvalidEmoteResponseModel[]
}

/**
 * Response object representing an invalid emote
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.InvalidEmoteResponseModel
 */
interface InvalidEmoteResponseModel {
  assetId: number
  position: number
  error: string
}

/**
 * A model containing details needed to update or create an outfit
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.OutfitUpdateModel
 */
interface OutfitUpdateModel {
  name: string
  bodyColors: BodyColorsModel
  assetIds: number[]
  scale: ScaleModel
  playerAvatarType: string
}

/**
 * A model containing details about a user outfit
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.OutfitDetailsModel
 */
interface OutfitDetailsModel {
  id: number
  name: string
  assets: AssetModel[]
  bodyColors: BodyColorsModel
  scale: ScaleModel
  playerAvatarType: string
  isEditable: boolean
}

/**
 * A model containing details about a recent item
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.RecentItemModel
 */
interface RecentItemModel {
  id: number
  name: string
  type: 'Asset' | 'Outfit'
  assetType: AssetTypeModel
  isEditable: boolean
}

/**
 * A model that contains a try-on thumbnail url and whether the url is final
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.TryOnModel
 */
interface TryOnModel {
  url: string
  final: boolean
}

/**
 * A model that contains metadata for the try-on endpoints
 *
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Api.Avatar.Models.TryOnMetadataModel
 */
interface TryOnMetadataModel {
  tryOnEndpointsEnabled: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - users/v1/Roblox.Web.WebAPI.Models.ApiPageResponse[Roblox.Users.Api.UserSearchUserResponse]
 */
interface ApiPageResponse<T> {
  previousPageCursor: string
  nextPageCursor: string
  data: T[]
}

/**
 * A response containing badge information.
 *
 * @privateRemarks
 * Generated using:
 *   - badges/v2/Roblox.Badges.Api.BadgeResponse
 */
interface BadgeResponse {
  id: number
  name: string
  description: string
  displayName: string
  displayDescription: string
  enabled: boolean
  iconImageId: number
  displayIconImageId: number
  created: Date
  updated: Date
  statistics: BadgeAwardStatisticsResponse
  awardingUniverse: UniverseResponse
}

/**
 * @privateRemarks
 * Generated using:
 *   - badges/v2/Roblox.Web.Responses.Badges.BadgeAwardStatisticsResponse
 */
interface BadgeAwardStatisticsResponse {
  pastDayAwardedCount: number
  awardedCount: number
  winRatePercentage: number
}

/**
 * A response containing universe information.
 *
 * @privateRemarks
 * Generated using:
 *   - badges/v2/Roblox.Badges.Api.UniverseResponse
 */
interface UniverseResponse {
  id: number
  name: string
  rootPlaceId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.BundleDetailsModel
 */
interface BundleDetailsModel {
  id: number
  name: string
  description: string
  bundleType: string
  items: BundleItemDetailModel[]
  creator: BundleCreatorModel
  product: BundleProductModel
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.BundleItemDetailModel
 */
interface BundleItemDetailModel {
  owned: boolean
  id: number
  name: string
  type: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.BundleCreatorModel
 */
interface BundleCreatorModel {
  id: number
  name: string
  type: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.BundleProductModel
 */
interface BundleProductModel {
  id: number
  type: string
  isPublicDomain: boolean
  isForSale: boolean
  priceInRobux: number
  isFree: boolean
  noPriceText: string
  premiumPricing: PremiumPricingModel
}

/**
 * Defines the Premium pricing for a catalog item
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.PremiumPricingModel
 */
interface PremiumPricingModel {
  premiumDiscountPercentage: number
  premiumPriceInRobux: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Catalog.Api.BundleDetailsModel]
 *   - catalog/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Catalog.Api.CatalogSearchDetailedResponseItem]
 *   - catalog/v2/Roblox.Web.WebAPI.Models.ApiArrayResponse[System.Int64]
 *   - economy/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Economy.Api.ResaleRecordResponse]
 *   - friends/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Friends.Api.Models.Response.UserResponse]
 *   - friends/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Friends.Api.Models.Response.UserPresenceResponse]
 *   - friends/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Friends.Api.FriendStatusResponse]
 *   - games/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Games.Api.Models.Response.GameDetailResponse]
 *   - games/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Games.Api.Models.Response.GameProductResponse]
 *   - games/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Games.Api.Models.Response.GameMediaItem]
 *   - games/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Games.Api.Models.Response.GameSpotlightResponse]
 *   - games/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Games.Api.SocialLinkResponse]
 *   - games/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Games.Api.Models.Response.GameVoteResponse]
 *   - games/v2/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Web.Responses.Games.GameMediaItemResponseV2]
 *   - groups/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Web.Responses.Groups.GroupBasicResponse]
 *   - groups/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Groups.Api.GroupMembershipDetailResponse]
 *   - groups/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Groups.Api.UserGroupMembershipResponse]
 *   - groups/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Groups.Api.GroupDetailResponse]
 *   - groups/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Groups.Api.GroupPermissionsResponse]
 *   - groups/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Groups.Api.GroupPayoutResponse]
 *   - groups/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Groups.Api.GroupRoleDetailResponse]
 *   - groups/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Groups.Api.SocialLinkResponse]
 *   - groups/v2/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Web.Responses.Groups.GroupResponseV2]
 *   - groups/v2/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Groups.Api.GroupMembershipResponse]
 *   - itemconfiguration/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.ItemConfiguration.Api.ItemWithTags]
 *   - itemconfiguration/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.ItemConfiguration.Api.TagDetails]
 *   - thumbnails/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Web.Responses.Thumbnails.ThumbnailResponse]
 *   - thumbnails/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Web.Responses.Thumbnails.ThumbnailBatchResponse]
 *   - thumbnails/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Thumbnails.Api.Models.UniverseThumbnailsResponse]
 *   - users/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Web.Responses.Users.SkinnyUserResponse]
 *   - users/v1/Roblox.Web.WebAPI.Models.ApiArrayResponse[Roblox.Users.Api.MultiGetUserByNameResponse]
 */
interface ApiArrayResponse<T> {
  data: T[]
}

/**
 * A model to represent owned bundles.
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.OwnedBundleModel
 */
interface OwnedBundleModel {
  id: number
  name: string
  bundleType: string
  creator: BundleCreatorModel
}

/**
 * Catalog Metadata model
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CatalogMetadataModel
 */
interface CatalogMetadataModel {
  numberOfCatalogItemsToDisplayOnSplash: number
  numberOfCatalogItemsToDisplayOnSplashOnPhone: number
  isCatalogSortsFromApiEnabled: boolean
  is3dInEachItemCardAbTestingEnabled: boolean
  is3dInEachItemCardEnabled: boolean
  timeoutOn3dThumbnailRequestInMs: number
  isPremiumPriceOnItemTilesEnabled: boolean
  isPremiumIconOnItemTilesEnabled: boolean
  isPremiumSortEnabled: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.MultigetItemDetailsRequestModel
 */
interface MultigetItemDetailsRequestModel {
  items: MultigetItemDetailsRequestItem[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.MultigetItemDetailsRequestItem
 */
interface MultigetItemDetailsRequestItem {
  itemType: 'Asset' | 'Bundle'
  id: number
}

type AssetType =
  | 'Image'
  | 'TShirt'
  | 'Audio'
  | 'Mesh'
  | 'Lua'
  | 'HTML'
  | 'Text'
  | 'Hat'
  | 'Place'
  | 'Model'
  | 'Shirt'
  | 'Pants'
  | 'Decal'
  | 'Avatar'
  | 'Head'
  | 'Face'
  | 'Gear'
  | 'Badge'
  | 'GroupEmblem'
  | 'Animation'
  | 'Arms'
  | 'Legs'
  | 'Torso'
  | 'RightArm'
  | 'LeftArm'
  | 'LeftLeg'
  | 'RightLeg'
  | 'Package'
  | 'YouTubeVideo'
  | 'GamePass'
  | 'App'
  | 'Code'
  | 'Plugin'
  | 'SolidModel'
  | 'MeshPart'
  | 'HairAccessory'
  | 'FaceAccessory'
  | 'NeckAccessory'
  | 'ShoulderAccessory'
  | 'FrontAccessory'
  | 'BackAccessory'
  | 'WaistAccessory'
  | 'ClimbAnimation'
  | 'DeathAnimation'
  | 'FallAnimation'
  | 'IdleAnimation'
  | 'JumpAnimation'
  | 'RunAnimation'
  | 'SwimAnimation'
  | 'WalkAnimation'
  | 'PoseAnimation'
  | 'LocalizationTableManifest'
  | 'LocalizationTableTranslation'
  | 'EmoteAnimation'
  | 'Video'
  | 'TexturePack'

/**
 * The detailed model for catalog items.
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CatalogSearchDetailedResponseItem
 */
interface CatalogSearchDetailedResponseItem {
  id: number
  itemType: 'Asset' | 'Bundle'
  assetType: AssetType
  bundleType: 'BodyParts' | 'AvatarAnimations'
  name: string
  description: string
  productId: number
  genres: string[]
  bundledItems: BundleItemDetailModel[]
  itemStatus: string[]
  itemRestrictions: string[]
  creatorType: 'User' | 'Group'
  creatorTargetId: number
  creatorName: string
  price: number
  premiumPricing: PremiumPricingModel
  lowestPrice: number
  priceStatus: string
  unitsAvailableForConsumption: number
  purchaseCount: number
  favoriteCount: number
  offSaleDeadline: Date
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CatalogSortsResponseModel
 */
interface CatalogSortsResponseModel {
  sorts: CatalogSortModel[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CatalogSortModel
 */
interface CatalogSortModel {
  name: string
  displayName: string
  numberOfItems: number
  items: CatalogSearchResponseItem[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CatalogSearchResponseItem
 */
interface CatalogSearchResponseItem {
  id: number
  itemType: 'Asset' | 'Bundle'
}

/**
 * The detailed model for catalog items, complete with economy and ownership info
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CatalogSearchDetailedCompleteResponseItem
 */
interface CatalogSearchDetailedCompleteResponseItem {
  isForRent: boolean
  expectedSellerId: number
  owned: boolean
  isPurchasable: boolean
  id: number
  itemType: 'Asset' | 'Bundle'
  assetType: AssetType
  bundleType: 'BodyParts' | 'AvatarAnimations'
  name: string
  description: string
  productId: number
  genres: string[]
  bundledItems: BundleItemDetailModel[]
  itemStatus: string[]
  itemRestrictions: string[]
  creatorType: 'User' | 'Group'
  creatorTargetId: number
  creatorName: string
  price: number
  premiumPricing: PremiumPricingModel
  lowestPrice: number
  priceStatus: string
  unitsAvailableForConsumption: number
  purchaseCount: number
  favoriteCount: number
  offSaleDeadline: Date
}

/**
 * @privateRemarks
 * Generated using:
 *   - avatar/v1/Roblox.Web.WebAPI.Models.ApiLegacyPageResponse[Roblox.Api.Avatar.Models.RecentItemModel]
 *   - catalog/v1/Roblox.Web.WebAPI.Models.ApiLegacyPageResponse[Roblox.Catalog.Api.CatalogItemModel]
 *   - catalog/v1/Roblox.Web.WebAPI.Models.ApiLegacyPageResponse[Roblox.Catalog.Api.RecommendationViewModelV2]
 */
interface ApiLegacyPageResponse<T> {
  data: T[]
  total: number
}

/**
 * Basic catalog item model
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CatalogItemModel
 */
interface CatalogItemModel {
  id: number
  name: string
  description: string
  type: string
  priceInRobux: number
  premiumPricing: PremiumPricingModel
}

/**
 * A model to represent asset favorites.
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.AssetFavoriteModel
 */
interface AssetFavoriteModel {
  assetId: number
  userId: number
  created: Date
}

/**
 * A model to represent bundle favorites.
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.BundleFavoriteModel
 */
interface BundleFavoriteModel {
  bundleId: number
  userId: number
  created: Date
}

/**
 * Recommendations Metadata Model
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.RecommendationsMetadataModel
 */
interface RecommendationsMetadataModel {
  numOfRecommendationsDisplayed: number
  numOfRecommendationsRetrieved: number
  subject: string
  isV2EndpointEnabled: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.RecommendationViewModelV2
 */
interface RecommendationViewModelV2 {
  item: ItemContainerV2
  creator: CreatorContainerV2
  product: ProductContainerV2
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.ItemContainerV2
 */
interface ItemContainerV2 {
  assetId: number
  name: string
  price: number
  premiumPrice: number
  absoluteUrl: string
  audioUrl: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CreatorContainerV2
 */
interface CreatorContainerV2 {
  creatorId: number
  creatorType: string
  name: string
  creatorProfileLink: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.ProductContainerV2
 */
interface ProductContainerV2 {
  id: number
  priceInRobux: number
  isForSale: boolean
  isPublicDomain: boolean
  isResellable: boolean
  isLimited: boolean
  isLimitedUnique: boolean
  serialNumber: number
  isRental: boolean
  rentalDurationInHours: number
  bcRequirement: number
  totalPrivateSales: number
  sellerId: number
  sellerName: string
  lowestPrivateSaleUserAssetId: number
  isXboxExclusiveItem: boolean
  offsaleDeadline: string
  noPriceText: string
  isFree: boolean
}

/**
 * Response model for navigation menu items
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CatalogMenuItemsResponseModel
 */
interface CatalogMenuItemsResponseModel {
  defaultGearSubcategory:
    | 'Accessories'
    | 'All'
    | 'AvatarAnimations'
    | 'BackAccessories'
    | 'BodyParts'
    | 'Clothing'
    | 'Collectibles'
    | 'FaceAccessories'
    | 'Faces'
    | 'Featured'
    | 'FrontAccessories'
    | 'Gear'
    | 'HairAccessories'
    | 'Hats'
    | 'Heads'
    | 'NeckAccessories'
    | 'Pants'
    | 'Shirts'
    | 'ShoulderAccessories'
    | 'Tshirts'
    | 'WaistAccessories'
    | 'Bundles'
    | 'AnimationBundles'
    | 'EmoteAnimations'
    | 'CommunityCreations'
    | 'Melee'
    | 'Ranged'
    | 'Explosive'
    | 'PowerUp'
    | 'Navigation'
    | 'Musical'
    | 'Social'
    | 'Building'
    | 'Transport'
    | 'Premium'
    | 'Recommended'
  defaultCategory:
    | 'Accessories'
    | 'All'
    | 'AvatarAnimations'
    | 'BodyParts'
    | 'Clothing'
    | 'Collectibles'
    | 'Featured'
    | 'Gear'
    | 'CommunityCreations'
    | 'Premium'
    | 'Recommended'
  defaultCategoryIdForRecommendedSearch:
    | 'Accessories'
    | 'All'
    | 'AvatarAnimations'
    | 'BodyParts'
    | 'Clothing'
    | 'Collectibles'
    | 'Featured'
    | 'Gear'
    | 'CommunityCreations'
    | 'Premium'
    | 'Recommended'
  defaultCreator: 'User' | 'Group'
  defaultCurrency: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free'
  defaultSortType: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc'
  defaultSortAggregation: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime'
  categoriesWithCreator: string[]
  robloxUserId: number
  robloxUserName: string
  gearSubcategory:
    | 'Accessories'
    | 'All'
    | 'AvatarAnimations'
    | 'BackAccessories'
    | 'BodyParts'
    | 'Clothing'
    | 'Collectibles'
    | 'FaceAccessories'
    | 'Faces'
    | 'Featured'
    | 'FrontAccessories'
    | 'Gear'
    | 'HairAccessories'
    | 'Hats'
    | 'Heads'
    | 'NeckAccessories'
    | 'Pants'
    | 'Shirts'
    | 'ShoulderAccessories'
    | 'Tshirts'
    | 'WaistAccessories'
    | 'Bundles'
    | 'AnimationBundles'
    | 'EmoteAnimations'
    | 'CommunityCreations'
    | 'Melee'
    | 'Ranged'
    | 'Explosive'
    | 'PowerUp'
    | 'Navigation'
    | 'Musical'
    | 'Social'
    | 'Building'
    | 'Transport'
    | 'Premium'
    | 'Recommended'
  allCategories:
    | 'Accessories'
    | 'All'
    | 'AvatarAnimations'
    | 'BodyParts'
    | 'Clothing'
    | 'Collectibles'
    | 'Featured'
    | 'Gear'
    | 'CommunityCreations'
    | 'Premium'
    | 'Recommended'
  freeFilter: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free'
  customRobuxFilter: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free'
  robuxFilter: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free'
  categories: CategoryModel[]
  genres: GenreModel[]
  sortMenu: SortMenuModel
  creatorFilters: CreatorFilterModel[]
  priceFilters: PriceFilterModel[]
}

/**
 * Response model for category
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CategoryModel
 */
interface CategoryModel {
  category:
    | 'Accessories'
    | 'All'
    | 'AvatarAnimations'
    | 'BodyParts'
    | 'Clothing'
    | 'Collectibles'
    | 'Featured'
    | 'Gear'
    | 'CommunityCreations'
    | 'Premium'
    | 'Recommended'
  categoryId: number
  name: string
  orderIndex: number
  subcategories: SubcategoryModel[]
  isSearchable: boolean
}

/**
 * Response model for genre
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.GenreModel
 */
interface GenreModel {
  genre:
    | 'TownAndCity'
    | 'Medieval'
    | 'SciFi'
    | 'Fighting'
    | 'Horror'
    | 'Naval'
    | 'Adventure'
    | 'Sports'
    | 'Comedy'
    | 'Western'
    | 'Military'
    | 'Building'
    | 'Fps'
    | 'Rpg'
  name: string
  isSelected: boolean
}

/**
 * Response model for sort menu
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.SortMenuModel
 */
interface SortMenuModel {
  sortOptions: SortOptionModel[]
  sortAggregations: SortAggregationModel[]
}

/**
 * Response model for creator filter
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CreatorFilterModel
 */
interface CreatorFilterModel {
  userId: number
  name: string
  isSelected: boolean
}

/**
 * Response model for price filter
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.PriceFilterModel
 */
interface PriceFilterModel {
  currencyType: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free'
  name: string
  excludePriceSorts: boolean
}

/**
 * Response model for subcategory
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.SubcategoryModel
 */
interface SubcategoryModel {
  subcategory:
    | 'Accessories'
    | 'All'
    | 'AvatarAnimations'
    | 'BackAccessories'
    | 'BodyParts'
    | 'Clothing'
    | 'Collectibles'
    | 'FaceAccessories'
    | 'Faces'
    | 'Featured'
    | 'FrontAccessories'
    | 'Gear'
    | 'HairAccessories'
    | 'Hats'
    | 'Heads'
    | 'NeckAccessories'
    | 'Pants'
    | 'Shirts'
    | 'ShoulderAccessories'
    | 'Tshirts'
    | 'WaistAccessories'
    | 'Bundles'
    | 'AnimationBundles'
    | 'EmoteAnimations'
    | 'CommunityCreations'
    | 'Melee'
    | 'Ranged'
    | 'Explosive'
    | 'PowerUp'
    | 'Navigation'
    | 'Musical'
    | 'Social'
    | 'Building'
    | 'Transport'
    | 'Premium'
    | 'Recommended'
  subcategoryId: number
  name: string
  shortName: string
}

/**
 * Response model for sort option
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.SortOptionModel
 */
interface SortOptionModel {
  sortType: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc'
  sortOrder: 'Asc' | 'Desc'
  name: string
  isSelected: boolean
  hasSubMenu: boolean
  isPriceRelated: boolean
}

/**
 * Response model for sort aggregation
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.SortAggregationModel
 */
interface SortAggregationModel {
  sortAggregation: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime'
  name: string
  isSelected: boolean
  hasSubMenu: boolean
  isPriceRelated: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CatalogSearchRequestModel
 */
interface CatalogSearchRequestModel {
  category:
    | 'Accessories'
    | 'All'
    | 'AvatarAnimations'
    | 'BodyParts'
    | 'Clothing'
    | 'Collectibles'
    | 'Featured'
    | 'Gear'
    | 'CommunityCreations'
    | 'Premium'
    | 'Recommended'
  subcategory:
    | 'Accessories'
    | 'All'
    | 'AvatarAnimations'
    | 'BackAccessories'
    | 'BodyParts'
    | 'Clothing'
    | 'Collectibles'
    | 'FaceAccessories'
    | 'Faces'
    | 'Featured'
    | 'FrontAccessories'
    | 'Gear'
    | 'HairAccessories'
    | 'Hats'
    | 'Heads'
    | 'NeckAccessories'
    | 'Pants'
    | 'Shirts'
    | 'ShoulderAccessories'
    | 'Tshirts'
    | 'WaistAccessories'
    | 'Bundles'
    | 'AnimationBundles'
    | 'EmoteAnimations'
    | 'CommunityCreations'
    | 'Melee'
    | 'Ranged'
    | 'Explosive'
    | 'PowerUp'
    | 'Navigation'
    | 'Musical'
    | 'Social'
    | 'Building'
    | 'Transport'
    | 'Premium'
    | 'Recommended'
  sortAggregation: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime'
  sortCurrency: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free'
  genres: string[]
  sortType: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc'
  creatorType: 'User' | 'Group'
  premiumBenefitFilterType: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly'
  creatorTargetId: number
  creatorName: string
  maxPrice: number
  minPrice: number
  keyword: string
  includeNotForSale: boolean
  tagNames: string[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Web.WebAPI.ExclusiveStartRequest[System.Int32]
 *   - badges/v2/Roblox.Web.WebAPI.ExclusiveStartRequest[System.Int64]
 *   - friends/v1/Roblox.Web.WebAPI.ExclusiveStartRequest[Roblox.Web.Friends.FriendRequestsPlatformExclusiveStartKey]
 *   - badges/v2/Roblox.Web.WebAPI.ExclusiveStartRequest[System.Int64]
 *   - catalog/v1/Roblox.Web.WebAPI.ExclusiveStartRequest[Roblox.Platform.Bundles.Core.IBundleInstance]
 */
interface ExclusiveStartRequest<T> {
  exclusiveStartKeyInfo: T
  cursorRecipe: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - badges/v2/Roblox.Platform.Core.ExclusiveStartPaging.IExclusiveStartKeyInfo[System.Int64]
 *   - catalog/v1/Roblox.Platform.Core.ExclusiveStartPaging.IExclusiveStartKeyInfo[Roblox.Platform.Bundles.Core.IBundleInstance]
 *   - catalog/v1/Roblox.Platform.Core.ExclusiveStartPaging.IExclusiveStartKeyInfo[System.Int32]
 *   - friends/v1/Roblox.Platform.Core.ExclusiveStartPaging.IExclusiveStartKeyInfo[Roblox.Web.Friends.FriendRequestsPlatformExclusiveStartKey]
 */
interface IExclusiveStartKeyInfo {
  sortOrder: 'Asc' | 'Desc'
  pagingDirection: 'Forward' | 'Backward'
  count: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.AvatarCatalogSearch.Client.ElasticsearchDebugInfo
 */
interface ElasticsearchDebugInfo {
  elasticsearchQuery: string
  isFromCache: boolean
  indexName: string
  isTerminatedEarly: boolean
  isForceTerminationEnabledByRequest: boolean
}

/**
 * ApiPageResponse for catalog search
 *
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Catalog.Api.CatalogSearchPageResponse[Roblox.Catalog.Api.CatalogSearchResponseItem]
 *   - catalog/v1/Roblox.Catalog.Api.CatalogSearchPageResponse[Roblox.Catalog.Api.CatalogSearchDetailedResponseItem]
 */
interface CatalogSearchPageResponse<T> {
  keyword: string
  elasticsearchDebugInfo: ElasticsearchDebugInfo
  previousPageCursor: string
  nextPageCursor: string
  data: T[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v2/Roblox.Catalog.Api.CatalogItemTypeSearchRequestModel
 */
interface CatalogItemTypeSearchRequestModel {
  assetTypeIds: number[]
  bundleTypeIds: number[]
  categoryFilter:
    | 'None'
    | 'Featured'
    | 'Collectibles'
    | 'CommunityCreations'
    | 'Landing'
    | 'Premium'
    | 'Recommended'
  sortAggregation: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime'
  sortCurrency: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free'
  genres: string[]
  sortType: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc'
  creatorType: 'User' | 'Group'
  premiumBenefitFilterType: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly'
  creatorTargetId: number
  creatorName: string
  maxPrice: number
  minPrice: number
  keyword: string
  includeNotForSale: boolean
  tagNames: string[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.UnreadConversationCountResponse
 */
interface UnreadConversationCountResponse {
  count: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.Conversation
 */
interface Conversation {
  id: number
  title: string
  initiator: ChatParticipant
  hasUnreadMessages: boolean
  participants: ChatParticipant[]
  conversationType: 'OneToOneConversation' | 'MultiUserConversation' | 'CloudEditConversation'
  conversationTitle: ConversationTitle
  lastUpdated: Date
  conversationUniverse: ConversationUniverse
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.ChatParticipant
 */
interface ChatParticipant {
  type: 'User' | 'System'
  targetId: number
  name: string
  displayName: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.ConversationTitle
 */
interface ConversationTitle {
  titleForViewer: string
  isDefaultTitle: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.ConversationUniverse
 */
interface ConversationUniverse {
  universeId: number
  rootPlaceId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.MultigetConversationMessagesResponse
 */
interface MultigetConversationMessagesResponse {
  conversationId: number
  chatMessages: ChatMessage[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.ChatMessage
 */
interface ChatMessage {
  id: string
  senderType: 'User' | 'System'
  sent: Date
  read: boolean
  messageType: 'PlainText' | 'Link' | 'EventBased'
  decorators: string[]
  senderTargetId: number
  content: string
  link: Link
  eventBased: EventBased
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.Link
 */
interface Link {
  type: 'Game'
  game: GameLink
}

/**
 * @privateRemarks
 * Generated using:
 *   > chat/v2/Roblox.Chat.Api.Models.EventBased
 */
interface EventBased {
  type: 'SetConversationUniverse'
  setConversationUniverse: SetConversationUniverseEventBased
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.GameLink
 */
interface GameLink {
  universeId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.SetConversationUniverseEventBased
 */
interface SetConversationUniverseEventBased {
  actorUserId: number
  universeId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.SendPlainTextChatMessageRequest
 */
interface SendPlainTextChatMessageRequest {
  message: string
  conversationId: number
  decorators: string[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.SendPlainTextChatMessageResponse
 */
interface SendPlainTextChatMessageResponse {
  content: string
  filteredForReceivers: boolean
  messageId: string
  sent: Date
  messageType: 'PlainText' | 'Link' | 'EventBased'
  resultType: 'Success' | 'Moderated' | 'TextTooLong' | 'NoRealtimeConnection'
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.SendGameLinkChatMessageRequest
 */
interface SendGameLinkChatMessageRequest {
  universeId: number
  conversationId: number
  decorators: string[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.SendLinkChatResponse
 */
interface SendLinkChatResponse {
  chatMessageLinkType: 'Game'
  messageId: string
  sent: Date
  messageType: 'PlainText' | 'Link' | 'EventBased'
  resultType: 'Success' | 'Moderated' | 'TextTooLong' | 'NoRealtimeConnection'
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.MarkAsReadRequest
 */
interface MarkAsReadRequest {
  conversationId: number
  endMessageId: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.MarkAsReadResponse
 */
interface MarkAsReadResponse {
  resultType: 'Success'
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.MarkAsSeenRequest
 */
interface MarkAsSeenRequest {
  conversationsToMarkSeen: number[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.MarkAsSeenResponse
 */
interface MarkAsSeenResponse {
  resultType: 'Success'
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.CreateCloudEditConversationRequest
 */
interface CreateCloudEditConversationRequest {
  placeId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.StartNewConversationResponse
 */
interface StartNewConversationResponse {
  conversation: Conversation
  rejectedParticipants: RejectedChatParticipant[]
  resultType: 'Success'
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.RejectedChatParticipant
 */
interface RejectedChatParticipant {
  rejectedReason: string
  type: 'User' | 'System'
  targetId: number
  name: string
  displayName: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.CreateGroupConversationRequest
 */
interface CreateGroupConversationRequest {
  participantUserIds: number[]
  title: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.CreateOneToOneConversationRequest
 */
interface CreateOneToOneConversationRequest {
  participantUserId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.AddUsersToConversationRequest
 */
interface AddUsersToConversationRequest {
  participantUserIds: number[]
  conversationId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.AddUserToConversationResponse
 */
interface AddUserToConversationResponse {
  conversationId: number
  rejectedParticipants: RejectedChatParticipant[]
  resultType: 'Success'
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.RemoveUserFromConversationRequest
 */
interface RemoveUserFromConversationRequest {
  participantUserId: number
  conversationId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.RemoveUserFromConversationResponse
 */
interface RemoveUserFromConversationResponse {
  conversationId: number
  resultType: 'Success'
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.RenameGroupConversationRequest
 */
interface RenameGroupConversationRequest {
  conversationId: number
  newTitle: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.RenameConversationResponse
 */
interface RenameConversationResponse {
  conversationTitle: string
  resultType: 'Success' | 'Moderated' | 'TextTooLong'
  title: ConversationTitle
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.ChatSettingsResponse
 */
interface ChatSettingsResponse {
  chatEnabled: boolean
  isActiveChatUser: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.UpdateUserTypingStatusRequest
 */
interface UpdateUserTypingStatusRequest {
  conversationId: number
  isTyping: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.UserVisibleStatusResponse
 */
interface UserVisibleStatusResponse {
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.RolloutSettingsResponse
 */
interface RolloutSettingsResponse {
  rolloutFeatures: RolloutSettingModel[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.RolloutSettingModel
 */
interface RolloutSettingModel {
  featureName: 'LuaChat' | 'ConversationUniverse' | 'PlayTogether' | 'Party' | 'GameLink' | 'OldPlayTogether'
  isRolloutEnabled: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.SetConversationUniverseRequest
 */
interface SetConversationUniverseRequest {
  conversationId: number
  universeId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.ResetConversationUniverseRequest
 */
interface ResetConversationUniverseRequest {
  conversationId: number
}

/**
 * Chat Metadata Response Model
 *
 * @privateRemarks
 * Generated using:
 *   - chat/v2/Roblox.Chat.Api.Models.ChatMetadataResponse
 */
interface ChatMetadataResponse {
  isChatEnabledByPrivacySetting: 'Disabled' | 'Enabled' | 'Unavailable'
  languageForPrivacySettingUnavailable: string
  maxConversationTitleLength: number
  numberOfMembersForPartyChrome: number
  partyChromeDisplayTimeStampInterval: number
  signalRDisconnectionResponseInMilliseconds: number
  typingInChatFromSenderThrottleMs: number
  typingInChatForReceiverExpirationMs: number
  relativeValueToRecordUiPerformance: number
  isChatDataFromLocalStorageEnabled: boolean
  chatDataFromLocalStorageExpirationSeconds: number
  isUsingCacheToLoadFriendsInfoEnabled: boolean
  cachedDataFromLocalStorageExpirationMS: number
  senderTypesForUnknownMessageTypeError: string[]
  isInvalidMessageTypeFallbackEnabled: boolean
  isRespectingMessageTypeEnabled: boolean
  validMessageTypesWhiteList: string[]
  shouldRespectConversationHasUnreadMessageToMarkAsRead: boolean
  isVoiceChatForClientSideEnabled: boolean
  isAliasChatForClientSideEnabled: boolean
  isPlayTogetherForGameCardsEnabled: boolean
  isRoactChatEnabled: boolean
  isConnectTabEnabled: boolean
}

/**
 * The response model for the Cashout Widgent endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Controllers.V1.CashoutInfoResponseModel
 */
interface V1CashoutInfoResponseModel {
  hasCurrencyOperationError: boolean
  currencyOperationErrorMessage: string
  showOnlyExchangeRates: boolean
  meetsMembershipRequirements: boolean
  emailIsVerified: boolean
  isImbursementBlacklistUser: boolean
  canProceedToCashout: boolean
  showProgressBar: boolean
  percentRobux: number
  minRobuxToCashOut: number
  maxRobuxCanCashOut: number
  lastImbursementStatus: string
  lastImbursementSubmissionDate: Date
  conversionPercent: number
}

/**
 * The response model for {M:Roblox.Economy.Api.Controllers.V1.CashOutController.CashOutAbility}
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Models.CashOutAbilityResponseModel
 */
interface CashOutAbilityResponseModel {
  canCashOut: boolean
  meetsPremiumRequirement: boolean
  hasVerifiedEmail: boolean
  isUserBlackListed: boolean
  meetsMinimumCashOutBalance: boolean
  hasCashedOutThisMonth: boolean
  lastImbursementStatusIsValid: boolean
}

/**
 * The request model for {M:Roblox.Economy.Api.Controllers.V1.CashOutController.Submit(Roblox.Economy.Api.Models.SubmitRequestModel)}
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Models.SubmitRequestModel
 */
interface SubmitRequestModel {
  password: string
  paypalEmail: string
  firstName: string
  lastName: string
  country: string
  robux: number
}

/**
 * A data model represent response for {M:Roblox.Economy.Api.Controllers.V1.CashOutController.Submit(Roblox.Economy.Api.Models.SubmitRequestModel)}
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Models.SubmitResponseModel
 */
interface SubmitResponseModel {
  submitted: boolean
  cashOutAbility: CashOutAbilityResponseModel
  errors: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Web.Responses.Economy.CurrencyResponse
 */
interface CurrencyResponse {
  robux: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Models.LatestAddFundsResponse
 */
interface LatestAddFundsResponse {
  transactionDate: string
  rateLimitInDays: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Models.AddFundsRequest
 */
interface AddFundsRequest {
  robuxAmount: number
}

/**
 * The response model for {M:Roblox.Economy.Api.Controllers.V1.GroupPayoutsController.GetUserGroupPayoutEligibility(System.Int64,System.Collections.Generic.ICollection{System.Int64})}
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Models.UserGroupPayoutEligibilityResponseModel
 */
interface UserGroupPayoutEligibilityResponseModel {
  usersGroupPayoutEligibility: 'Undefined' | 'Eligible' | 'NotInGroup' | 'PayoutRestricted'
}

/**
 * Purchasable detail request model.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Models.PurchasableDetailResponse
 */
interface PurchasableDetailResponse {
  purchasable: boolean
  reason:
    | 'Success'
    | 'AlreadyOwned'
    | 'ApplicationError'
    | 'EconomyDisabled'
    | 'InsufficientFunds'
    | 'InsufficientMembership'
    | 'InvalidTransaction'
    | 'NotAvailableInRobux'
    | 'NotForSale'
    | 'PriceChanged'
    | 'SaleExpired'
    | 'SupplyExausted' // Typo in documentation?
    | 'ContentRatingRestricted'
    | 'UnknownBirthday'
    | 'AffiliateSalesDisabled'
    | 'BadAffiliateSaleProduct'
    | 'ExceptionOccurred'
    | 'IOSOnlyItem'
    | 'InvalidArguments'
    | 'TooManyPurchases'
    | 'Unauthorized'
    | 'AccountRestrictionsRestricted'
    | 'PendingTransactionAlreadyExists'
    | 'SaleUnavailableAtSaleLocation'
  productId: number
  statusCode: number
  title: string
  errorMsg: string
  showDivId: string
  shortfallPrice: number
  balanceAfterSale: number
  expectedPrice: number
  currency: number
  price: number
  assetId: number
  assetName: string
  assetType: string
  assetTypeDisplayName: string
  assetIsWearable: boolean
  sellerName: string
  transactionVerb: string
  isMultiPrivateSale: boolean
  premiumPricing: PremiumPricingModel
}

/**
 * Defines the Premium pricing for a product
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.PremiumPricingModel
 */
interface PremiumPricingModel {
  premiumDiscountPercentage: number
  premiumPriceInRobux: number
}

/**
 * Purchase detail request model.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Models.PurchaseDetailRequest
 */
interface PurchaseDetailRequest {
  expectedCurrency: number
  expectedPrice: number
  expectedSellerId: number
  expectedPromoId: number
  userAssetId: number
  saleLocationType: 'Website' | 'Game'
  saleLocationId: number
}

/**
 * Purchase detail request model.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Models.PurchaseDetailResponse
 */
interface PurchaseDetailResponse {
  purchased: boolean
  reason:
    | 'Success'
    | 'AlreadyOwned'
    | 'ApplicationError'
    | 'EconomyDisabled'
    | 'InsufficientFunds'
    | 'InsufficientMembership'
    | 'InvalidTransaction'
    | 'NotAvailableInRobux'
    | 'NotForSale'
    | 'PriceChanged'
    | 'SaleExpired'
    | 'SupplyExausted'
    | 'ContentRatingRestricted'
    | 'UnknownBirthday'
    | 'AffiliateSalesDisabled'
    | 'BadAffiliateSaleProduct'
    | 'ExceptionOccurred'
    | 'IOSOnlyItem'
    | 'InvalidArguments'
    | 'TooManyPurchases'
    | 'Unauthorized'
    | 'AccountRestrictionsRestricted'
    | 'PendingTransactionAlreadyExists'
    | 'SaleUnavailableAtSaleLocation'
  productId: number
  statusCode: number
  title: string
  errorMsg: string
  showDivId: string
  shortfallPrice: number
  balanceAfterSale: number
  expectedPrice: number
  currency: number
  price: number
  assetId: number
  assetName: string
  assetType: string
  assetTypeDisplayName: string
  assetIsWearable: boolean
  sellerName: string
  transactionVerb: string
  isMultiPrivateSale: boolean
  premiumPricing: PremiumPricingModel
}

/**
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Paging.StartIndexCursor
 */
interface StartIndexCursor {
  startIndex: number
  discriminator: string
  count: number
}

type RobloxAgentsAgentType = 'User' | 'Group'

/**
 * A record of a user asset up for sale.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.ResaleRecordResponse
 */
interface ResaleRecordResponse {
  userAssetId: number
  seller: RelatedEntityTypeResponse<RobloxAgentsAgentType>
  price: number
  serialNumber: number
}

/**
 * @TODO TODO: Unalias from ApiPageResponse<T>
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Web.Responses.RelatedEntityTypeResponse[Roblox.Agents.AgentType]
 *   - games/v2/Roblox.Web.Responses.RelatedEntityTypeResponse[Roblox.Platform.Core.CreatorType]
 *   - games/v2/Roblox.Web.Responses.RelatedEntityTypeResponse[Roblox.Platform.Assets.AssetType]
 *   - groups/v1/Roblox.Web.Responses.RelatedEntityTypeResponse[Roblox.Web.Responses.Groups.GroupOwnerType]
 *   - groups/v1/Roblox.Web.Responses.RelatedEntityTypeResponse[Roblox.Web.Responses.Groups.GroupShoutPosterType]
 */
interface RelatedEntityTypeResponse<T> {
  id: number
  type: T
  name: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.UserAssetsPatchRequest
 */
interface UserAssetsPatchRequest {
  price: number
}

/**
 * Resale data for an item.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.ResaleDataResponse
 */
interface ResaleDataResponse {
  assetStock: number
  sales: number
  numberRemaining: number
  recentAveragePrice: number
  originalPrice: number
  priceDataPoints: ChartDataPointResponse[]
  volumeDataPoints: ChartDataPointResponse[]
}

/**
 * Chart data point.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.ChartDataPointResponse
 */
interface ChartDataPointResponse {
  value: number
  date: Date
}

/**
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.ResaleTaxRateResponse
 */
interface ResaleTaxRateResponse {
  taxRate: number
  minimumFee: number
}

/**
 * Robux revenue summary response.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.RevenueSummaryResponse
 */
interface RevenueSummaryResponse {
  recurringRobuxStipend: number
  itemSaleRobux: number
  purchasedRobux: number
  tradeSystemRobux: number
  pendingRobux: number
  groupPayoutRobux: number
  individualToGroupRobux: number
}

/**
 * Response model for a virtual economy transaction.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Models.TransactionResponse
 */
interface TransactionResponse {
  id: number
  created: Date
  isPending: boolean
  agent: AgentResponse
  details: TransactionDetailsResponse
  currency: GenericCurrencyResponse
}

/**
 * Represents an agent, which can be either a user or a group.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Models.AgentResponse
 */
interface AgentResponse {
  id: number
  type: 'User' | 'Group'
  name: string
}

/**
 * Base class that represents the item in the transaction.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Economy.Api.Models.TransactionDetailsResponse
 */
interface TransactionDetailsResponse {}

/**
 * @privateRemarks
 * Generated using:
 *   - economy/v1/Roblox.Web.Responses.Economy.GenericCurrencyResponse
 */
interface GenericCurrencyResponse {
  amount: number
  type: 'Robux' | 'Tickets'
}

/**
 * @privateRemarks
 * Generated using:
 *   - economy/v2/Roblox.Economy.Api.Models.ItemDetailResponse
 */
interface ItemDetailResponse {
  targetId: number
  productType: string
  assetId: number
  productId: number
  name: string
  description: string
  assetTypeId: number
  creator: CreatorDetails
  iconImageAssetId: number
  created: Date
  updated: Date
  priceInRobux: number
  premiumPriceInRobux: number
  priceInTickets: number
  sales: number
  isNew: boolean
  isForSale: boolean
  isPublicDomain: boolean
  isLimited: boolean
  isLimitedUnique: boolean
  remaining: number
  minimumMembershipLevel: number
  contentRatingTypeId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - economy/v2/Roblox.Economy.Api.Models.CreatorDetails
 */
interface CreatorDetails {
  id: number
  name: string
  creatorType: string
  creatorTargetId: number
}

/**
 * Purchase detail request model.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v2/Roblox.Economy.Api.Models.PurchaseRequest
 */
interface PurchaseRequest {
  expectedPrice: number
  saleLocationType: 'Website' | 'Game'
  saleLocationId: number
  requestId: string
}

/**
 * Purchase response model.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v2/Roblox.Economy.Api.Models.PurchaseResponse
 */
interface PurchaseResponse {
  purchased: boolean
  transactionStatus:
    | 'Success'
    | 'AlreadyOwned'
    | 'ApplicationError'
    | 'EconomyDisabled'
    | 'InsufficientFunds'
    | 'InsufficientMembership'
    | 'InvalidTransaction'
    | 'NotAvailableInRobux'
    | 'NotForSale'
    | 'PriceChanged'
    | 'SaleExpired'
    | 'SupplyExausted'
    | 'ContentRatingRestricted'
    | 'UnknownBirthday'
    | 'AffiliateSalesDisabled'
    | 'BadAffiliateSaleProduct'
    | 'ExceptionOccurred'
    | 'IOSOnlyItem'
    | 'InvalidArguments'
    | 'TooManyPurchases'
    | 'Unauthorized'
    | 'AccountRestrictionsRestricted'
    | 'PendingTransactionAlreadyExists'
    | 'SaleUnavailableAtSaleLocation'
  productId: number
  price: number
  receipt: string
  success: boolean
}

/**
 * Response model for a virtual economy transaction record.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v2/Roblox.Economy.Api.Models.TransactionRecordResponse
 */
interface TransactionRecordResponse {
  id: number
  transactionType: string
  created: Date
  isPending: boolean
  agent: AgentResponse
  details: TransactionDetailsResponse
  currency: GenericCurrencyResponse
}

/**
 * Response model for a virtual economy transaction totals.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v2/Roblox.Economy.Api.Models.TransactionTotalsResponse
 */
interface TransactionTotalsResponse {
  salesTotal: number
  purchasesTotal: number
  affiliateSalesTotal: number
  groupPayoutsTotal: number
  currencyPurchasesTotal: number
  premiumStipendsTotal: number
  tradeSystemEarningsTotal: number
  tradeSystemCostsTotal: number
  premiumPayoutsTotal: number
  groupPremiumPayoutsTotal: number
  adSpendTotal: number
  developerExchangeTotal: number
  pendingRobuxTotal: number
  incomingRobuxTotal: number
  outgoingRobuxTotal: number
  individualToGroupTotal: number
  csAdjustmentTotal: number
}

/**
 * Response model detailing the transaction types a user has used in their account lifetime.
 *
 * @privateRemarks
 * Generated using:
 *   - economy/v2/Roblox.Economy.Api.Models.TransactionUsedTypesResponse
 */
interface TransactionUsedTypesResponse {
  hasPurchase: boolean
  hasSale: boolean
  hasAffiliateSale: boolean
  hasGroupPayout: boolean
  hasCurrencyPurchase: boolean
  hasTradeRobux: boolean
  hasPremiumStipend: boolean
  hasEngagementPayout: boolean
  hasGroupEngagementPayout: boolean
  hasAdSpend: boolean
  hasDevEx: boolean
  hasIndividualToGroup: boolean
  hasCSAdjustment: boolean
}

/**
 * Model for a user following a universe controller responses
 *
 * @privateRemarks
 * Generated using:
 *   - followings/v1/Roblox.Followings.Api.Models.UserFollowingUniverseResponse
 */
interface UserFollowingUniverseResponse {
  universeId: number
  userId: number
}

/**
 * Model for a user following a universe  state controller responses
 *
 * @privateRemarks
 * Generated using:
 *   - followings/v1/Roblox.Followings.Api.Models.UserFollowingUniverseStatusResponse
 */
interface UserFollowingUniverseStatusResponse {
  universeId: number
  userId: number
  canFollow: boolean
  isFollowing: boolean
  followingCountByType: number
  followingLimitByType: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - followings/v2/System.Threading.CancellationToken
 */
interface SystemThreadingCancellationToken {
  isCancellationRequested: boolean
  canBeCanceled: boolean
  waitHandle: SystemThreadingWaitHandle
}

/**
 * @privateRemarks
 * Generated using:
 *   - followings/v2/System.Threading.WaitHandle
 */
interface SystemThreadingWaitHandle {
  handle: Record<string, unknown> // TODO:
  safeWaitHandle: MicrosoftWin32SafeHandlesSafeWaitHandle
}

/**
 * @privateRemarks
 * Generated using:
 *   - followings/v2/Microsoft.Win32.SafeHandles.SafeWaitHandle
 */
interface MicrosoftWin32SafeHandlesSafeWaitHandle {
  isInvalid: boolean
  isClosed: boolean
}

/**
 * Data model containing collection of all followed sources of a specific type.
 *
 * @privateRemarks
 * Generated using:
 *   - followings/v2/Roblox.Followings.Api.Models.FollowsByTypeResponse
 */
interface FollowsByTypeResponse {
  followerType: 'User'
  followerId: number
  sourceType: 'Universe'
  followedSources: Date
}

/**
 * Request model for FollowingExists endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.FollowingExistsRequestModel
 */
interface FollowingExistsRequestModel {
  targetUserIds: number[]
}

/**
 * Response model for FollowingExists endpoint.
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.Models.Response.FollowingExistsResponseModel
 */
interface FollowingExistsResponseModel {
  followings: FollowingExistsResponse[]
}

/**
 * Response contained in list for FollowingExists endpoint. Corresponds to a single userId.
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.Models.Response.FollowingExistsResponse
 */
interface FollowingExistsResponse {
  isFollowing: boolean
  userId: number
}

/**
 * A response model representing user information that also contains select presence information
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.Models.Response.UserResponse
 */
interface UserResponse {
  isOnline: boolean
  isDeleted: boolean
  description: string
  created: Date
  isBanned: boolean
  id: number
  name: string
  displayName: string
}

/**
 * A response model representing user presence information.
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.Models.Response.UserPresenceResponse
 */
interface UserPresenceResponse {
  userPresence: UserPresenceResponseModel
  id: number
  name: string
  displayName: string
}

/**
 * Response model for {Roblox.Web.Presence.Interfaces.IUserPresence} objects
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.Models.Response.UserPresenceResponseModel
 */
interface UserPresenceResponseModel {
  userPresenceType: string
  userLocationType: string
  lastLocation: string
  placeId: number
  rootPlaceId: number
  gameInstanceId: string
  universeId: number
  lastOnline: Date
}

/**
 * The friendship status response model.
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.FriendStatusResponse
 */
interface FriendStatusResponse {
  id: number
  status: 'NotFriends' | 'Friends' | 'RequestSent' | 'RequestReceived'
}

/**
 * Response model for Pending Friend Request Count
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.PendingFriendRequestCountModel
 */
interface PendingFriendRequestCountModel {
  count: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.FriendshipRequestModel
 */
interface FriendshipRequestModel {
  friendshipOriginSourceType: 'Unknown' | 'PlayerSearch' | 'InGame' | 'UserProfile'
}

/**
 * This is response model to notify when action succeeded, failed, or captcha is required
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.CaptchaStatusResponseModel
 */
interface CaptchaStatusResponseModel {
  success: boolean
  isCaptchaRequired: boolean
}

/**
 * Response model for Friends Count
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.FriendsCountResponse
 */
interface FriendsCountResponse {
  count: number
}

/**
 * Response model for following or followers Count
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.FollowCountResponse
 */
interface FollowCountResponse {
  count: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Web.Responses.Users.UserResponseV2
 */
interface UserResponseV2 {
  description: string
  created: Date
  isBanned: boolean
  id: number
  name: string
  displayName: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.Models.Response.FriendsPageMetadataResponse
 */
interface FriendsPageMetadataResponse {
  isNearbyUpsellEnabled: boolean
  isFriendsFilterExperimentEnabled: boolean
  isFriendsUserDataStoreCacheEnabled: boolean
  userName: string
  displayName: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.Models.Response.UserRecommendationsResponse
 */
interface UserRecommendationsResponse {
  recommendedUsers: UserRecommendation[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.Models.Response.UserRecommendation
 */
interface UserRecommendation {
  userId: number
  userName: string
  userProfilePageUrl: string
  userPresenceType: 'Offline' | 'Online' | 'InGame' | 'InStudio'
}

/**
 * This is response model for representing a nearby session
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.Models.Response.NearbySessionResponseModel
 */
interface NearbySessionResponseModel {
  code: string
  expires: number
}

/**
 * This is response model for representing the data from nearby get friends data request
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.Models.Response.NearbyFriendsDataResponseModel
 */
interface NearbyFriendsDataResponseModel {
  userId: number
  username: string
  friendshipStatus: 'NoFriendship' | 'PendingOnOtherUser' | 'PendingOnCurrentUser' | 'Friends'
}

/**
 * This is response model for representing a QR session
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.Models.Response.QRSessionResponseModel
 */
interface QrSessionResponseModel {
  code: string
  expires: number
}

/**
 * This is response model for representing the data from QR redeem request
 *
 * @privateRemarks
 * Generated using:
 *   - friends/v1/Roblox.Friends.Api.Models.Response.QRFriendsRedeemResponseModel
 */
interface QrFriendsRedeemResponseModel {
  userId: number
  username: string
}

/**
 * Response model for favorited game count.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameFavoritesCountResponse
 */
interface GameFavoritesCountResponse {
  favoritesCount: number
}

/**
 * Game favorite request model.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Request.GameFavoritesRequest
 */
interface GameFavoritesRequest {
  isFavorited: boolean
}

/**
 * Game favorite response model.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameFavoriteResponse
 */
interface GameFavoriteResponse {
  isFavorited: boolean
}

/**
 * Response model for getting game passes
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GamePassResponse
 */
interface GamePassResponse {
  id: number
  name: string
  displayName: string
  productId: number
  price: number
}

/**
 * Game recommendations request model.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Request.GameRecommendationsRequest
 */
interface GameRecommendationsRequest {
  paginationKey: string
  maxRows: number
  isTruncatedResultsEnabled: boolean
}

/**
 * Game recommendations response model.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameRecommendationsResponse
 */
interface GameRecommendationsResponse {
  games: GameResponseModel[]
  nextPaginationKey: string
}

/**
 * Response model for games.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameResponseModel
 */
interface GameResponseModel {
  creatorId: number
  creatorName: string
  creatorType: string
  totalUpVotes: number
  totalDownVotes: number
  universeId: number
  name: string
  placeId: number
  playerCount: number
  imageToken: string
  isSponsored: boolean
  nativeAdData: string
  isShowSponsoredLabel: boolean
  price: number
  analyticsIdentifier: string
  gameDescription: string
}

/**
 * Game sorts request model.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Request.GameSortsRequest
 */
interface GameSortsRequest {
  gameSortsContext:
    | 'GamesDefaultSorts'
    | 'GamesAllSorts'
    | 'HomeSorts'
    | 'ChatSorts'
    | 'UnifiedHomeSorts'
    | 'GamesPageAbTestSorts1'
    | 'GamesPageAbTestSorts2'
}

/**
 * Response model for a collection of game sorts
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameSortsResponse
 */
interface GameSortsResponse {
  sorts: GameSort[]
  timeFilters: TimeFilter[]
  genreFilters: GenreFilter[]
  gameFilters: GameFilter[]
  pageContext: PageContext
  gameSortStyle: string
}

/**
 * Response model for a game sort.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameSort
 */
interface GameSort {
  token: string
  name: string
  displayName: string
  gameSetTargetId: number
  timeOptionsAvailable: boolean
  genreOptionsAvailable: boolean
  numberOfRows: number
  numberOfGames: number
  isDefaultSort: boolean
  contextUniverseId: number
  contextCountryRegionId: number
  tokenExpiryInSeconds: number
}

/**
 * Response model for time filter.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.TimeFilter
 */
interface TimeFilter {
  token: string
  name: string
  tokenExpiryInSeconds: number
}

/**
 * Genre filter response model.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GenreFilter
 */
interface GenreFilter {
  token: string
  name: string
  tokenExpiryInSeconds: number
}

/**
 * Game filter response model.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameFilter
 */
interface GameFilter {
  token: string
  name: string
  tokenExpiryInSeconds: number
}

/**
 * This class contains context information about a page load for the user.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.PageContext
 */
interface PageContext {
  pageId: string
  isSeeAllPage: boolean
}

/**
 * Games search request model.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Request.GamesSearchRequest
 */
interface GamesSearchRequest {
  sortToken: string
  gameFilter: string
  timeFilter: string
  genreFilter: string
  exclusiveStartId: number
  sortOrder: number
  gameSetTargetId: number
  keyword: string
  startRows: number
  maxRows: number
  contextCountryRegionId: number
  contextUniverseId: number
  pageContext: PageContext
  sortPosition: number
}

/**
 * Response model for games search
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GamesSearchResponse
 */
interface GamesSearchResponse {
  games: GameResponseModel[]
  suggestedKeyword: string
  correctedKeyword: string
  filteredKeyword: string
  hasMoreRows: boolean
  nextPageExclusiveStartId: number
  featuredSearchUniverseId: number
  emphasis: boolean
  cutOffIndex: number
  algorithm: string
  algorithmQueryType: string
  suggestionAlgorithm: string
  relatedGames: GameResponseModel[]
}

/**
 * Thumbnail response model.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.Thumbnail
 */
interface Thumbnail {
  final: boolean
  url: string
  cdnUrl: string
  retryToken: string
  universeId: number
  placeId: number
}

/**
 * Response model for a place.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.PlaceDetails
 */
interface PlaceDetails {
  placeId: number
  name: string
  description: string
  url: string
  builder: string
  builderId: number
  isPlayable: boolean
  reasonProhibited: string
  universeId: number
  universeRootPlaceId: number
  price: number
  imageToken: string
}

/**
 * Model for setting metadata
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.ReportPlaceMetadataRequest
 */
interface ReportPlaceMetadataRequest {
  filteringEnabled: boolean
}

/**
 * Response model for getting the game detail
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameDetailResponse
 */
interface GameDetailResponse {
  id: number
  rootPlaceId: number
  name: string
  description: string
  creator: GameCreator
  price: number
  allowedGearGenres: string[]
  allowedGearCategories: string[]
  playing: number
  visits: number
  maxPlayers: number
  created: Date
  updated: Date
  studioAccessToApisAllowed: boolean
  createVipServersAllowed: boolean
  universeAvatarType: 'MorphToR6' | 'PlayerChoice' | 'MorphToR15'
  genre: string
  gameRating: Rating
}

/**
 * Response model for getting the game creator
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameCreator
 */
interface GameCreator {
  id: number
  name: string
  type: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Contentratingsservice.V1.Rating
 */
interface Rating {
  ratingCountryCode: string
  ratingProvider: string
  ratingInformation: RatingInformation[]
  ratingProviderUrl: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Contentratingsservice.V1.RatingInformation
 */
interface RatingInformation {
  ratingValue: string
  ratingDescriptors: string[]
  interactiveElements: string[]
  metainfoValues: string[]
  imageUrl: string
  ratingValueDescription: string
}

/**
 * Response model for getting a universe's playability status for a user
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.PlayabilityStatusResponse
 */
interface PlayabilityStatusResponse {
  playabilityStatus:
    | 'UnplayableOtherReason'
    | 'Playable'
    | 'GuestProhibited'
    | 'GameUnapproved'
    | 'IncorrectConfiguration'
    | 'UniverseRootPlaceIsPrivate'
    | 'InsufficientPermissionFriendsOnly'
    | 'InsufficientPermissionGroupOnly'
    | 'DeviceRestricted'
    | 'UnderReview'
    | 'PurchaseRequired'
    | 'AccountRestricted'
    | 'TemporarilyUnavailable'
  isPlayable: boolean
  universeId: number
}

/**
 * Response model for getting the game product information
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameProductResponse
 */
interface GameProductResponse {
  universeId: number
  isForSale: boolean
  productId: number
  price: number
  sellerId: number
}

/**
 * Response model for getting the game media item
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameMediaItem
 */
interface GameMediaItem {
  id: number
  assetTypeId: number
  assetType: string
  imageId: number
  videoHash: string
  videoTitle: string
  approved: boolean
}

/**
 * Response model for getting the game icon.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameIconResponse
 */
interface GameIconResponse {
  imageId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Web.Responses.Games.GameServerResponse
 */
interface GamesGameServerResponse {
  id: string
  maxPlayers: number
  playing: number
  fps: number
  ping: number
  name: string
  vipServerId: number
  accessCode: string
  ownerUserId: number
}

/**
 * Response model for a spotlight game.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameSpotlightResponse
 */
interface GameSpotlightResponse {
  spotlightType: string
  spotlightActionText: string
  spotlightTypeData: SpotlightTypeData
  gameInfo: GameResponseModel
}

/**
 * Parent class to derive custom data for each spotlight type.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.SpotlightTypeData
 */
interface SpotlightTypeData {}

/**
 * Omni recommendations request model.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Request.OmniRecommendationsRequest
 */
interface OmniRecommendationsRequest {
  pageType: 'Invalid' | 'Home' | 'Games'
  sessionId: string
}

/**
 * Response model for games search
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.OmniRecommendationsResponse
 */
interface OmniRecommendationsResponse {
  sorts: OmniRecommendationsSortModel[]
}

/**
 * Model for sort contents returned from multiget game lists
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.OmniRecommendationsSortModel
 */
interface OmniRecommendationsSortModel {
  topic: string
  recommendationList: OmniRecommendationDataModel[]
}

/**
 * Model for sort contents returned from multiget game lists
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.OmniRecommendationDataModel
 */
interface OmniRecommendationDataModel {
  contentType: 'Invalid' | 'Game'
  responseModel: OmniRecommendationResponseModel
}

/**
 * Container to hold different type of responses
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.OmniRecommendationResponseModel
 */
interface OmniRecommendationResponseModel {}

/**
 * A social link for a game
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.SocialLinkResponse
 */
interface SocialLinkResponse {
  id: number
  title: string
  url: string
  type: 'Facebook' | 'Twitter' | 'YouTube' | 'Twitch' | 'GooglePlus' | 'Discord' | 'RobloxGroup'
}

/**
 * Request model to update a VIP server.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.VipServerUpdateRequest
 */
interface VipServerUpdateRequest {
  name: string
  newJoinCode: boolean
  active: boolean
}

/**
 * Response model for a VIP server.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.VipServerResponse
 */
interface VipServerResponse {
  id: number
  name: string
  game: GameResponse
  joinCode: string
  active: boolean
  subscription: VipServerSubscriptionResponse
  permissions: VipServerPermissionsResponse
}

/**
 * Response model for a VIP server game.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.GameResponse
 */
interface GameResponse {
  id: number
  name: string
  rootPlace: PlaceResponse
}

/**
 * Response model for VIP server subscription.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.VipServerSubscriptionResponse
 */
interface VipServerSubscriptionResponse {
  active: boolean
  expired: boolean
  expirationDate: Date
  price: number
  canRenew: boolean
  hasInsufficientFunds: boolean
  hasRecurringProfile: boolean
  hasPriceChanged: boolean
}

/**
 * Response model for VIP server permissions.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.VipServerPermissionsResponse
 */
interface VipServerPermissionsResponse {
  clanAllowed: boolean
  enemyClanId: number
  friendsAllowed: boolean
  users: SkinnyUserResponse[]
}

/**
 * Response model for a VIP server place
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.PlaceResponse
 */
interface PlaceResponse {
  id: number
  name: string
}

/**
 * Request model to update subscriptions for a VIP server.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.VipServerUpdateSubscriptionRequest
 */
interface VipServerUpdateSubscriptionRequest {
  active: boolean
  price: number
}

/**
 * Request model for updating permissions for a VIP server.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.VipServerUpdatePermissionsRequest
 */
interface VipServerUpdatePermissionsRequest {
  clanAllowed: boolean
  enemyClanId: number
  friendsAllowed: boolean
  usersToAdd: number[]
  usersToRemove: number[]
}

/**
 * An create request for a vip server
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.CreateVipServersRequest
 */
interface CreateVipServersRequest {
  name: string
  expectedPrice: number
}

/**
 * Response model for VIP server can-invite user.
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.VipServerCanInviteResponse
 */
interface VipServerCanInviteResponse {
  canInvite: boolean
}

/**
 * Response model for getting the game vote
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.GameVoteResponse
 */
interface GameVoteResponse {
  id: number
  upVotes: number
  downVotes: number
}

/**
 * Response model for getting the user vote status for a game
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Response.UserGameVoteResponse
 */
interface UserGameVoteResponse {
  canVote: boolean
  userVote: boolean
  reasonForNotVoteable: string
}

/**
 * A request for set user's vote for a game
 *
 * @privateRemarks
 * Generated using:
 *   - games/v1/Roblox.Games.Api.Models.Request.SetUserGameVoteRequest
 */
interface SetUserGameVoteRequest {
  vote: boolean
}

type RobloxPlatformCoreCreatorType = 'User' | 'Group'

/**
 * @privateRemarks
 * Generated using:
 *   - games/v2/Roblox.Web.Responses.Games.GameResponseV2
 */
interface GamesGameResponseV2 {
  id: number
  name: string
  description: string
  creator: RelatedEntityTypeResponse<RobloxPlatformCoreCreatorType>
  rootPlace: RelatedEntityTypeResponse<AssetType>
  created: Date
  updated: Date
  placeVisits: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - games/v2/Roblox.Web.Responses.Games.GameMediaItemResponseV2
 */
interface GamesGameMediaItemResponseV2 {
  assetTypeId: number
  assetType: string
  imageId: number
  videoHash: string
  videoTitle: string
  approved: boolean
}

/**
 * A detailed group response model
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupDetailResponse
 */
interface GroupDetailResponse {
  id: number
  name: string
  description: string
  owner: UserModel
  shout: ShoutResponse
  memberCount: number
  isBuildersClubOnly: boolean
  publicEntryAllowed: boolean
  isLocked: boolean
}

/**
 * A model representing data about an {Roblox.Platform.Membership.IUser}
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.Models.Response.UserModel
 */
interface UserModel {
  buildersClubMembershipType: 'None' | 'BC' | 'TBC' | 'OBC' | 'RobloxPremium'
  userId: number
  username: string
  displayName: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.ShoutResponse
 */
interface ShoutResponse {
  body: string
  poster: UserModel
  created: Date
  updated: Date
}

/**
 * A request model for creating a new group.
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.CreateGroupRequest
 */
interface CreateGroupRequest {
  name: string
  description: string
  publicGroup: boolean
  buildersClubMembersOnly: boolean
}

type GroupOwnerType = 'User'

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Web.Responses.Groups.GroupResponseV2
 */
interface GroupResponseV2 {
  id: number
  name: string
  description: string
  owner: RelatedEntityTypeResponse<GroupOwnerType>
  memberCount: number
  shout: GroupShoutResponse
  created: Date
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Web.Responses.Groups.GroupShoutResponse
 */
interface GroupShoutResponse {
  body: string
  poster: RelatedEntityTypeResponse<GroupShoutPosterType>
  created: Date
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Web.Responses.Groups.GroupShoutPosterType
 */
interface GroupShoutPosterType {
  id: number
  type: 'User'
  name: string
}

/**
 * A request model for creating a new group.
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.ChangeIconRequest
 */
interface ChangeIconRequest {}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupPolicyRequest
 */
interface GroupPolicyRequest {
  groupIds: number[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupPoliciesResponse
 */
interface GroupPoliciesResponse {
  groups: GroupPolicyResponse[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupPolicyResponse
 */
interface GroupPolicyResponse {
  canViewGroup: boolean
  groupId: number
}

/**
 * A request model for setting the authenticated user's primary group.
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.PostGroupStatusRequest
 */
interface PostGroupStatusRequest {
  message: string
}

/**
 * A request model for setting a description for the group
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.UpdateGroupDescriptionRequest
 */
interface UpdateGroupDescriptionRequest {
  description: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupDescriptionResponse
 */
interface GroupDescriptionResponse {
  newDescription: string
}

/**
 * Response model for Group Settings
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupSettingsResponse
 */
interface GroupSettingsResponse {
  isApprovalRequired: boolean
  isBuildersClubRequired: boolean
  areEnemiesAllowed: boolean
  areGroupFundsVisible: boolean
  areGroupGamesVisible: boolean
}

/**
 * A request model for updating a group's settings.
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.UpdateGroupSettingsRequest
 */
interface UpdateGroupSettingsRequest {
  isApprovalRequired: boolean
  areEnemiesAllowed: boolean
  areGroupFundsVisible: boolean
  areGroupGamesVisible: boolean
}

/**
 * ApiPageResponse for group audit log
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupAuditLogPageResponse[Roblox.Groups.Api.Models.Response.GroupAuditLogResponseItem]
 */
interface GroupAuditLogPageResponse<GroupAuditLogResponseItem> {
  previousPageCursor: string
  nextPageCursor: string
  data: GroupAuditLogResponseItem[]
}

/**
 * A group audit log response model
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.Models.Response.GroupAuditLogResponseItem
 */
interface GroupAuditLogResponseItem {
  actor: UserGroupRoleResponse
  actionType: string
  description: Record<string, unknown> // TODO:
  created: Date
}

/**
 * A user group role response model
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.UserGroupRoleResponse
 */
interface UserGroupRoleResponse {
  user: UserModel
  role: GroupRoleResponse
}

/**
 * A group role response model
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupRoleResponse
 */
interface GroupRoleResponse {
  id: number
  name: string
  description: string
  rank: number
  memberCount: number
}

/**
 * A group roles response model
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupsDisplayOptionsResponse
 */
interface GroupsDisplayOptionsResponse {
  groupLimit: number
  currentGroupCount: number
  groupStatusMaxLength: number
  groupPostMaxLength: number
  isGroupWallNotificationsEnabled: boolean
  groupWallNotificationsSubscribeIntervalInMilliseconds: number
  areProfileGroupsHidden: boolean
  isGroupDetailsPolicyEnabled: boolean
}

/**
 * A response model for group configuration
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupConfigurationDisplayOptionsResponse
 */
interface GroupConfigurationDisplayOptionsResponse {
  groupConfiguration: GroupConfigurationResponse
  recurringPayoutsConfiguration: RecurringPayoutsConfigurationResponse
  roleConfiguration: RoleConfigurationResponse
  isPremiumPayoutsEnabled: boolean
  isDefaultEmblemPolicyEnabled: boolean
}

/**
 * A response model for group configuration
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupConfigurationResponse
 */
interface GroupConfigurationResponse {
  nameMaxLength: number
  descriptionMaxLength: number
  iconMaxFileSizeMb: number
  cost: number
}

/**
 * A response model for recurring payout configuration
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.RecurringPayoutsConfigurationResponse
 */
interface RecurringPayoutsConfigurationResponse {
  maxPayoutPartners: number
}

/**
 * A response model for role configuration
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.RoleConfigurationResponse
 */
interface RoleConfigurationResponse {
  nameMaxLength: number
  descriptionMaxLength: number
  limit: number
  cost: number
  minRank: number
  maxRank: number
}

/**
 * ApiPageResponse for catalog search
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupSearchPageResponse
 */
interface GroupSearchPageResponse {
  keyword: string
  previousPageCursor: string
  nextPageCursor: string
  data: GroupSearchResponseItem[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupSearchResponseItem
 */
interface GroupSearchResponseItem {
  id: number
  name: string
  description: string
  memberCount: number
  publicEntryAllowed: boolean
  created: Date
  updated: Date
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Web.Responses.Groups.GroupBasicResponse
 */
interface GroupBasicResponse {
  id: number
  name: string
  memberCount: number
}

/**
 * Response Model For Group Search Metadata Endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupSearchMetadataResponse
 */
interface GroupSearchMetadataResponse {
  suggestedGroupKeywords: string[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.MembersRequest
 */
interface MembersRequest {
  userIds: number[]
}

/**
 * Response model for {Roblox.GroupJoinRequest}s
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupJoinRequestResponse
 */
interface GroupJoinRequestResponse {
  requester: LegacyUserResponse
  created: Date
}

/**
 * A request model for setting a users role in a group.
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.UpdateUserRoleRequest
 */
interface UpdateUserRoleRequest {
  roleId: number
}

/**
 * A group membership response model
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupMembershipDetailResponse
 */
interface GroupMembershipDetailResponse {
  group: GroupDetailResponse
  role: GroupRoleResponse
  isPrimaryGroup: boolean
}

/**
 * A users group membership response model
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.UserGroupMembershipResponse
 */
interface UserGroupMembershipResponse {
  user: UserModel
  groups: GroupMembershipDetailResponse[]
}

/**
 * A request model for joining group.
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.JoinGroupRequest
 */
interface JoinGroupRequest {
  captchaToken: string
  captchaProvider: string
}

/**
 * A group roles response model
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupAllRolesResponse
 */
interface GroupAllRolesResponse {
  groupId: number
  roles: GroupRoleResponse[]
}

/**
 * A user's group membership metadata response model
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupMembershipMetadataResponse
 */
interface GroupMembershipMetadataResponse {
  groupId: number
  isPrimary: boolean
  isPendingJoin: boolean
  userRole: UserGroupRoleResponse
  permissions: GroupPermissionsModel
  areGroupGamesVisible: boolean
  areGroupFundsVisible: boolean
  areEnemiesAllowed: boolean
  canConfigure: boolean
}

/**
 * A model for group permissions/&gt;
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupPermissionsModel
 */
interface GroupPermissionsModel {
  groupPostsPermissions: GroupPostsPermissionsModel
  groupMembershipPermissions: GroupMembershipPermissionsModel
  groupManagementPermissions: GroupManagementPermissionsModel
  groupEconomyPermissions: GroupEconomyPermissionsModel
}

/**
 * A model representing group posts permissions
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupPostsPermissionsModel
 */
interface GroupPostsPermissionsModel {
  viewWall: boolean
  postToWall: boolean
  deleteFromWall: boolean
  viewStatus: boolean
  postToStatus: boolean
}

/**
 * A model representing data about an {Roblox.Platform.Membership.IUser}
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupMembershipPermissionsModel
 */
interface GroupMembershipPermissionsModel {
  changeRank: boolean
  inviteMembers: boolean
  removeMembers: boolean
}

/**
 * A model representing data about an {Roblox.Platform.Membership.IUser}
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupManagementPermissionsModel
 */
interface GroupManagementPermissionsModel {
  manageRelationships: boolean
  manageClan: boolean
  viewAuditLogs: boolean
}

/**
 * A model representing data about an {Roblox.Platform.Membership.IUser}
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupEconomyPermissionsModel
 */
interface GroupEconomyPermissionsModel {
  spendGroupFunds: boolean
  advertiseGroup: boolean
  createItems: boolean
  manageItems: boolean
  addGroupPlaces: boolean
  manageGroupGames: boolean
  viewGroupPayouts: boolean
}

/**
 * A request model for changing the group owner.
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.ChangeOwnerRequest
 */
interface ChangeOwnerRequest {
  userId: number
}

/**
 * A group role's permissions response model
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupPermissionsResponse
 */
interface GroupPermissionsResponse {
  groupId: number
  role: GroupRoleResponse
  permissions: GroupPermissionsModel
}

/**
 * A request model for updating a group's roleset's permissions.
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.UpdatePermissionsRequest
 */
interface UpdatePermissionsRequest {
  permissions: Record<string, unknown> // TODO:
}

/**
 * A request model for setting the authenticated user's primary group.
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.PrimaryGroupRequest
 */
interface PrimaryGroupRequest {
  groupId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.RelationshipsRequest
 */
interface RelationshipsRequest {
  groupIds: number[]
}

/**
 * A request model for a page of elements
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.PagedRequest
 */
interface PagedRequest {
  startRowIndex: number
  maxRows: number
}

/**
 * A group relationships response model
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupRelationshipsResponse
 */
interface GroupRelationshipsResponse {
  groupId: number
  relationshipType: 'Allies' | 'Enemies'
  totalGroupCount: number
  relatedGroups: GroupDetailResponse[]
  nextRowIndex: number
}

/**
 * A group payout response
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupPayoutResponse
 */
interface GroupPayoutResponse {
  user: UserModel
  percentage: number
}

/**
 * Multi-payout request information.
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.PayoutRequest
 */
interface PayoutRequest {
  payoutType: 'FixedAmount' | 'Percentage'
  recipients: PayoutRecipientRequest[]
}

/**
 * A request model for paying out Robux.
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.PayoutRecipientRequest
 */
interface PayoutRecipientRequest {
  recipientId: number
  recipientType: 'User' | 'Group'
  amount: number
}

/**
 * Response model for Group Payout Restriction
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupPayoutRestrictionResponse
 */
interface GroupPayoutRestrictionResponse {
  canUseRecurringPayout: boolean
  canUseOneTimePayout: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.GroupRoleDetailResponse
 */
interface GroupRoleDetailResponse {
  groupId: number
  id: number
  name: string
  description: string
  rank: number
  memberCount: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.Models.Request.CreateRoleSetRequest
 */
interface ModelsRequestCreateRoleSetRequest {
  name: string
  description: string
  rank: number
  usingGroupFunds: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.Models.Request.UpdateRoleSetRequest
 */
interface ModelsRequestUpdateRoleSetRequest {
  name: string
  description: string
  rank: number
}

/**
 * A social link response from a create request
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.SocialLinkResponse
 */
interface SocialLinkResponse {
  id: number
  type: 'Facebook' | 'Twitter' | 'YouTube' | 'Twitch' | 'GooglePlus' | 'Discord' | 'RobloxGroup'
  url: string
  title: string
}

/**
 * An update request for a social link
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.SocialLinkRequest
 */
interface SocialLinkRequest {
  type: 'Facebook' | 'Twitter' | 'YouTube' | 'Twitch' | 'GooglePlus' | 'Discord' | 'RobloxGroup'
  url: string
  title: string
}

/**
 * A response model for group wall post information
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.Models.Response.GroupWallPostModel
 */
interface GroupWallPostModel {
  id: number
  poster: UserModel
  body: string
  created: Date
  updated: Date
}

/**
 * A request model for creating a group wall post
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v1/Roblox.Groups.Api.CreateWallPostRequest
 */
interface CreateWallPostRequest {
  body: string
  captchaToken: string
  captchaProvider: string
}

/**
 * A basic group membership response model
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v2/Roblox.Groups.Api.GroupMembershipResponse
 */
interface GroupMembershipResponse {
  group: GroupBasicResponse
  role: GroupRoleBasicResponse
}

/**
 * @privateRemarks
 * Generated using:
 *   - groups/v2/Roblox.Web.Responses.Groups.GroupRoleBasicResponse
 */
interface GroupRoleBasicResponse {
  id: number
  name: string
  rank: number
}

/**
 * A response model for group wall post information
 *
 * @privateRemarks
 * Generated using:
 *   - groups/v2/Roblox.Groups.Api.GroupWallPostV2Model
 */
interface GroupWallPostV2Model {
  id: number
  poster: UserGroupRoleResponse
  body: string
  created: Date
  updated: Date
}

/**
 * A model that contains a list of asset ids
 *
 * @privateRemarks
 * Generated using:
 *   - inventory/v1/Roblox.Inventory.Api.Models.AssetIdListModel
 */
interface AssetIdListModel {
  assetIds: number[]
}

/**
 * Assets owned by the player
 *
 * @privateRemarks
 * Generated using:
 *   - inventory/v1/Roblox.Inventory.Api.Models.OwnedAssetsResponse
 */
interface OwnedAssetsResponse {
  data: IAsset[]
  nextPageCursor: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - inventory/v1/Roblox.Platform.Assets.IAsset
 */
interface IAsset {
  typeId: number
  name: string
  description: string
  creatorType: 'User' | 'Group'
  creatorTargetId: number
  assetGenres: number
  isArchived: boolean
  created: Date
  updated: Date
  id: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - inventory/v1/Roblox.Inventory.Api.Models.CanViewInventoryResponse
 */
interface CanViewInventoryResponse {
  canView: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - inventory/v1/Roblox.Inventory.Api.Models.InventoryPageResponse
 */
interface InventoryPageResponse {
  data: Record<string, unknown> // TODO:[]
  total: number
  includesAccessories: boolean
}

/**
 * A model containing information about a {Roblox.Platform.AssetOwnership.UserAsset}
 *
 * @privateRemarks
 * Generated using:
 *   - inventory/v1/Roblox.Inventory.Api.Models.CollectibleUserAssetModel
 */
interface CollectibleUserAssetModel {
  userAssetId: number
  serialNumber: number
  assetId: number
  name: string
  recentAveragePrice: number
  originalPrice: number
  assetStock: number
  buildersClubMembershipType: 'None' | 'BC' | 'TBC' | 'OBC' | 'RobloxPremium'
}

/**
 * Model representing an inventory item
 *
 * @privateRemarks
 * Generated using:
 *   - inventory/v1/Roblox.Inventory.Api.Models.IItemModel
 */
interface IItemModel {
  id: number
  name: string
  type: 'Asset' | 'GamePass' | 'Badge' | 'Bundle'
  instanceId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - inventory/v2/Roblox.Inventory.Api.V2.AssetOwnerResponse
 */
interface AssetOwnerResponse {
  id: number
  serialNumber: number
  owner: RelatedEntityTypeResponse<RobloxAgentsAgentType>
  created: Date
  updated: Date
}

/**
 * Extends {Roblox.Inventory.Api.Models.UserAssetModel} with additional information for inventory items.
 *
 * @privateRemarks
 * Generated using:
 *   - inventory/v2/Roblox.Inventory.Api.Models.InventoryItemModel
 */
interface InventoryItemModel {
  assetName: string
  userAssetId: number
  assetId: number
  serialNumber: number
  owner: UserModel
  created: Date
  updated: Date
}

/**
 * A model representing data about an {Roblox.Platform.Membership.IUser}
 *
 * @privateRemarks
 * Generated using:
 *   - inventory/v2/Roblox.Inventory.Api.Models.UserModel
 */
interface UserModel {
  userId: number
  username: string
  buildersClubMembershipType: 'None' | 'BC' | 'TBC' | 'OBC' | 'RobloxPremium'
}

/**
 * @privateRemarks
 * Generated using:
 *   - catalog/v1/Roblox.Paging.ExclusiveStartKeyCursor[System.Nullable[System.Int64]]
 *   - economy/v2/Roblox.Paging.ExclusiveStartKeyCursor[System.Int64]
 *   - inventory/v2/Roblox.Paging.ExclusiveStartKeyCursor[Roblox.Inventory.Api.MultiTypeExclusiveStartKey[System.Int32,System.Int64]]
 */
interface ExclusiveStartKeyCursor<T> {
  key: T
  sortOrder: 'Asc' | 'Desc'
  pagingDirection: 'Forward' | 'Backward'
  pageNumber: number
  discriminator: string
  count: number
}

/**
 * An ExclusiveStartKey that contains a grouping of exclusive start keys.
 *
 * @privateRemarks
 * Generated using:
 *   - inventory/v2/Roblox.Inventory.Api.MultiTypeExclusiveStartKey[System.Int32,System.Int64]
 */
interface MultiTypeExclusiveStartKey {
  singleTypeExclusiveStartKeys: SingleTypeExclusiveStartKey[]
}

/**
 * One grouping of an exclusive start key <typeparamref name="TExclusiveStartKey" /> and an item type <typeparamref name="TType" />
 *
 * @privateRemarks
 * Generated using:
 *   - inventory/v2/Roblox.Inventory.Api.SingleTypeExclusiveStartKey[System.Int32,System.Int64]
 */
interface SingleTypeExclusiveStartKey {
  type: number
  exclusiveStartKey: number
}

/**
 * The user asset item model for V2 controllers.
 *
 * @privateRemarks
 * Generated using:
 *   - inventory/v2/Roblox.Inventory.Api.V2.UserAssetItemModelV2
 */
interface UserAssetItemModelV2 {
  assetId: number
  name: string
  assetType: AssetType
  created: Date
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.Web.Captcha.Models.Request.CaptchaTokenRequest
 */
interface CaptchaTokenRequest {
  captchaToken: string
  captchaProvider: string
}

/**
 * The response model for checking if captcha is needed for uploading an avatar asset
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.AvatarAssetUploadCaptchaCheckResponse
 */
interface AvatarAssetUploadCaptchaCheckResponse {
  success: boolean
  message: string
  fieldData: string
}

/**
 * Defines the request model for getting the upload fee for creating an avatar asset
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.GetAvatarAssetUploadFeeRequest
 */
interface GetAvatarAssetUploadFeeRequest {
  files: FormDataIUploadedFile
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.Web.WebApi.FormData.IUploadedFile
 */
interface FormDataIUploadedFile {
  name: string
  stream: SystemIoStream
  contentEncoding: 'None' | 'GZip' | 'Deflate'
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/System.IO.Stream
 */
interface SystemIoStream {
  canRead: boolean
  canSeek: boolean
  canTimeout: boolean
  canWrite: boolean
  length: number
  position: number
  readTimeout: number
  writeTimeout: number
}

/**
 * Defines the response model for the v1/avatar-assets/{assetType}/get-upload-fee endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.GetAvatarAssetUploadFeeResponse
 */
interface GetAvatarAssetUploadFeeResponse {
  price: number
  canAfford: boolean
}

/**
 * Defines the request model for uploading a new avatar asset
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.UploadAvatarAssetRequest
 */
interface UploadAvatarAssetRequest {
  files: FormDataIUploadedFile
}

/**
 * Defines the response model for the v1/avatar-assets/{assetType}/upload endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.UploadAvatarAssetResponse
 */
interface UploadAvatarAssetResponse {
  robuxAmountPaid: number
  assetId: number
}

/**
 * Item related metadata response model
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.ItemMetadataResponse
 */
interface ItemMetadataResponse {
  allowedAssetTypeForUpload: AllowedAssetTypeForUploadMetadata
  allowedAssetTypesForRelease: AllowedAssetTypeForReleaseMetadata
  allowedAssetTypesForFree: string[]
  allowedAssetTypesForSaleAvailabilityLocations: string[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.AllowedAssetTypeForUploadMetadata
 */
interface AllowedAssetTypeForUploadMetadata {
  allowedFileExtensions: string[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.AllowedAssetTypeForReleaseMetadata
 */
interface AllowedAssetTypeForReleaseMetadata {
  allowedPriceRange: AllowedPriceRange
  marketplaceFeesPercentage: number
  premiumPricing: AllowedPremiumPricingMetadata
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.AllowedPriceRange
 */
interface AllowedPriceRange {
  minRobux: number
  maxRobux: number
}

/**
 * Defines the metadata for reading about allowed premium pricing rules
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.AllowedPremiumPricingMetadata
 */
interface AllowedPremiumPricingMetadata {
  allowedDiscountPercentages: number[]
  allowedPriceRange: AllowedPriceRange
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.CommissionRatesResponse
 */
interface CommissionRatesResponse {
  itemTypeDetails: ItemTypeDetails
  commissionRates: CommissionRatesModel
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.ItemTypeDetails
 */
interface ItemTypeDetails {
  itemType: 'Undefined' | 'Asset'
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.CommissionRatesModel
 */
interface CommissionRatesModel {
  marketplaceFeesPercentage: number
  creatorFeesPercentage: number
  affiliateFeesPercentage: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.AssetCreationsDetailsRequest
 */
interface AssetCreationsDetailsRequest {
  assetIds: number[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.AssetCreationsDetailsResponse
 */
interface AssetCreationsDetailsResponse {
  assetId: number
  name: string
  status:
    | 'Unknown'
    | 'ReviewPending'
    | 'Moderated'
    | 'ReviewApproved'
    | 'OnSale'
    | 'OffSale'
    | 'DelayedRelease'
    | 'Free'
  description: string
  creatorType: 'Unknown' | 'User' | 'Group'
  creatorTargetId: number
  price: number
  priceConfiguration: PriceConfigurationModel
  isArchived: boolean
  assetType: string
  releaseConfiguration: ReleaseConfigurationResponseModel
}

/**
 * Defines the configuration options for an items price
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.PriceConfigurationModel
 */
interface PriceConfigurationModel {
  priceInRobux: number
  premiumDiscountPercentage: number
  premiumPriceInRobux: number
}

/**
 * Defines the configuration options associated with releasing an item
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.ReleaseConfigurationResponseModel
 */
interface ReleaseConfigurationResponseModel {
  saleAvailabilityLocations: string[]
}

/**
 * Asset Status response model
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.AssetCreationsResponse
 */
interface AssetCreationsResponse {
  assetId: number
  name: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.ItemWithTags
 */
interface ItemWithTags {
  id: string
  itemTags: ItemTagDetails[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.ItemTagDetails
 */
interface ItemTagDetails {
  id: string
  tag: TagDetails
}

/**
 * The tag model for any tag-related gets
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.TagDetails
 */
interface TagDetails {
  tagId: string
  name: string
  localizedDisplayName: string
  status: 'Success' | 'MissingItem'
}

/**
 * Request model to add a tag to an item
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.CreateItemTagRequest
 */
interface CreateItemTagRequest {
  itemId: string
  tagId: string
}

/**
 * Item-tags related metadata response model
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.ItemTagsMetadataResponse
 */
interface ItemTagsMetadataResponse {
  isItemTagsFeatureEnabled: boolean
  enabledAssetTypes: string[]
  maximumItemTagsPerItem: number
}

/**
 * Defines the response model for the /v1/assets/{assetId}/get-selling-fee endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.GetSellingFeeResponse
 */
interface GetSellingFeeResponse {
  price: number
}

/**
 * Request Model to release an asset
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.ReleaseAssetRequest
 */
interface ReleaseAssetRequest {
  price: number
  priceConfiguration: PriceConfigurationModel
  saleStatus: 'OnSale' | 'OffSale' | 'Free'
  releaseConfiguration: ReleaseConfigurationRequestModel
}

/**
 * Defines the configuration options for an items price
 *
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.ReleaseConfigurationRequestModel
 */
interface ReleaseConfigurationRequestModel {
  saleAvailabilityLocations: string[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.UpdatePriceForAssetRequest
 */
interface UpdatePriceForAssetRequest {
  price: number
  priceConfiguration: PriceConfigurationModel
}

/**
 * @privateRemarks
 * Generated using:
 *   - itemconfiguration/v1/Roblox.ItemConfiguration.Api.UpdateAssetRequest
 */
interface UpdateAssetRequest {
  releaseConfiguration: ReleaseConfigurationRequestModel
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.UserNotificationSettingsModel
 */
interface UserNotificationSettingsModel {
  notificationBandSettings: ReceiverNotificationSettingGroupModel[]
  optedOutNotificationSourceTypes: string[]
  optedOutReceiverDestinationTypes: string[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.ReceiverNotificationSettingGroupModel
 */
interface ReceiverNotificationSettingGroupModel {
  notificationSourceType:
    | 'Test'
    | 'FriendRequestReceived'
    | 'FriendRequestAccepted'
    | 'PartyInviteReceived'
    | 'PartyMemberJoined'
    | 'ChatNewMessage'
    | 'PrivateMessageReceived'
    | 'UserAddedToPrivateServerWhiteList'
    | 'ConversationUniverseChanged'
    | 'TeamCreateInvite'
    | 'GameUpdate'
    | 'DeveloperMetricsAvailable'
  receiverDestinationType: 'DesktopPush' | 'MobilePush' | 'NotificationStream'
  isEnabled: boolean
  isOverridable: boolean
  isSetByReceiver: boolean
  pushNotificationDestinationPreferences: ReceiverDestinationSettingModel[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.ReceiverDestinationSettingModel
 */
interface ReceiverDestinationSettingModel {
  name: string
  platform:
    | 'ChromeOnDesktop'
    | 'AndroidNative'
    | 'FirefoxOnDesktop'
    | 'IOSNative'
    | 'AndroidAmazon'
    | 'IOSTencent'
    | 'AndroidTencentService'
  destinationId: number
  isEnabled: boolean
  isSetByReceiver: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.NotificationRolloutSettingsModel
 */
interface NotificationRolloutSettingsModel {
  rollOutFeatureEnabledList: RolloutSettingsModel[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.RolloutSettingsModel
 */
interface RolloutSettingsModel {
  featureName: string
  isRolloutEnabled: boolean
  isValidFeature: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.RealTimeNotificationsSettingsResponseModel
 */
interface RealTimeNotificationsSettingsResponseModel {
  primaryDomain: string
  fallbackDomain: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.NotificationBandSettingsModel
 */
interface NotificationBandSettingsModel {
  updatedSettings: NotificationBandSettingModel[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.NotificationBandSettingModel
 */
interface NotificationBandSettingModel {
  notificationSourceType:
    | 'Test'
    | 'FriendRequestReceived'
    | 'FriendRequestAccepted'
    | 'PartyInviteReceived'
    | 'PartyMemberJoined'
    | 'ChatNewMessage'
    | 'PrivateMessageReceived'
    | 'UserAddedToPrivateServerWhiteList'
    | 'ConversationUniverseChanged'
    | 'TeamCreateInvite'
    | 'GameUpdate'
    | 'DeveloperMetricsAvailable'
  receiverDestinationType: 'DesktopPush' | 'MobilePush' | 'NotificationStream'
  isEnabled: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.ReceiverDestinationPreferenceModel
 */
interface ReceiverDestinationPreferenceModel {
  notificationSourceType:
    | 'Test'
    | 'FriendRequestReceived'
    | 'FriendRequestAccepted'
    | 'PartyInviteReceived'
    | 'PartyMemberJoined'
    | 'ChatNewMessage'
    | 'PrivateMessageReceived'
    | 'UserAddedToPrivateServerWhiteList'
    | 'ConversationUniverseChanged'
    | 'TeamCreateInvite'
    | 'GameUpdate'
    | 'DeveloperMetricsAvailable'
  destinationId: number
  isEnabled: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.NotificationSourceTypeModel
 */
interface NotificationSourceTypeModel {
  sourceType:
    | 'Test'
    | 'FriendRequestReceived'
    | 'FriendRequestAccepted'
    | 'PartyInviteReceived'
    | 'PartyMemberJoined'
    | 'ChatNewMessage'
    | 'PrivateMessageReceived'
    | 'UserAddedToPrivateServerWhiteList'
    | 'ConversationUniverseChanged'
    | 'TeamCreateInvite'
    | 'GameUpdate'
    | 'DeveloperMetricsAvailable'
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.ReceiverDestinationTypeModel
 */
interface ReceiverDestinationTypeModel {
  destinationType: 'DesktopPush' | 'MobilePush' | 'NotificationStream'
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.NotificationStreamEntriesModel
 */
interface NotificationStreamEntriesModel {
  id: string
  notificationSourceType:
    | 'Test'
    | 'FriendRequestReceived'
    | 'FriendRequestAccepted'
    | 'PartyInviteReceived'
    | 'PartyMemberJoined'
    | 'ChatNewMessage'
    | 'PrivateMessageReceived'
    | 'UserAddedToPrivateServerWhiteList'
    | 'ConversationUniverseChanged'
    | 'TeamCreateInvite'
    | 'GameUpdate'
    | 'DeveloperMetricsAvailable'
  eventDate: Date
  isInteracted: boolean
  metadataCollection: Record<string, unknown> // TODO:[]
  eventCount: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.MarkInteractedRequestModel
 */
interface MarkInteractedRequestModel {
  eventId: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.SuccessResponseModel
 */
interface SuccessResponseModel {
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.UnreadStreamNotificationsModel
 */
interface UnreadStreamNotificationsModel {
  unreadNotifications: number
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.NotificationStreamPromptSettingsModel
 */
interface NotificationStreamPromptSettingsModel {
  hasUserInteractedWithNotificationStream: boolean
  showNotificationStreamPrompt: boolean
}

/**
 * Model for a game update message to be displayed in notification stream.
 *
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.GameUpdateNotificationModel
 */
interface GameUpdateNotificationModel {
  universeId: number
  rootPlaceId: number
  createdOn: Date
  createdOnKey: string
  content: string
  universeName: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.GameUpdateNotificationReadRequestModel
 */
interface GameUpdateNotificationReadRequestModel {
  universeId: number
  createdOn: string
  currentUserId: number
}

/**
 * The request model for game update notification interacted event
 *
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.GameUpdateNotificationInteractedRequestModel
 */
interface GameUpdateNotificationInteractedRequestModel {
  universeId: number
  createdOnKey: string
  interactionType: 'Unknown' | 'Seen' | 'Played' | 'Unfollowed'
  currentUserId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.ResponseModels.NotificationStreamMetadataResponse
 */
interface ResponseModelsNotificationStreamMetadataResponse {
  bannerDismissTimeSpan: number
  signalRDisconnectionResponseInMilliseconds: number
  canLaunchGameFromGameUpdate: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.GetPushDestinationsResponseModel
 */
interface GetPushDestinationsResponseModel {
  destinations: UserPushDestination[]
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.UserPushDestination
 */
interface UserPushDestination {
  user: NotificationUser
  name: string
  notificationToken: string
  supportsUpdateNotifications: boolean
  userPushNotificationDestinationId: number
  application: string
  platform:
    | 'ChromeOnDesktop'
    | 'AndroidNative'
    | 'FirefoxOnDesktop'
    | 'IOSNative'
    | 'AndroidAmazon'
    | 'IOSTencent'
    | 'AndroidTencentService'
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.NotificationUser
 */
interface NotificationUser {
  name: string
  userId: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.GetCurrentPushDestinationResponseModel
 */
interface GetCurrentPushDestinationResponseModel {
  destination: UserPushDestination
  statusMessage: string
}

/**
 * Chrome Manifest to link GCM project to Chrome browser
 *
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.ChromeManifestModel
 */
interface ChromeManifestModel {
  name: string
  gcm_sender_id: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.RegisterChromeRequestModel
 */
interface RegisterChromeRequestModel {
  notificationToken: string
  initiatedByUser: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.RegistrationResponseModel
 */
interface RegistrationResponseModel {
  registration: PushNotificationRegistration
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.PushNotificationRegistration
 */
interface PushNotificationRegistration {
  userPushNotificationDestinationId: number
  name: string
  notificationToken: string
  application: string
  platform:
    | 'ChromeOnDesktop'
    | 'AndroidNative'
    | 'FirefoxOnDesktop'
    | 'IOSNative'
    | 'AndroidAmazon'
    | 'IOSTencent'
    | 'AndroidTencentService'
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.RegisterFirefoxRequestModel
 */
interface RegisterFirefoxRequestModel {
  notificationToken: string
  notificationEndpoint: string
  initiatedByUser: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.RegisterAndroidRequestModel
 */
interface RegisterAndroidRequestModel {
  notificationToken: string
  authorizeForUser: boolean
  oldNotificationToken: string
  deviceName: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.RegisterAndroidAmazonRequestModel
 */
interface RegisterAndroidAmazonRequestModel {
  notificationToken: string
  authorizeForUser: boolean
  oldNotificationToken: string
  deviceName: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.RegisterIOSNativeRequestModel
 */
interface RegisterIosNativeRequestModel {
  notificationToken: string
  destinationIdentifier: string
  authorizeForUser: boolean
  oldNotificationToken: string
  deviceName: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.RegisterTencentServiceRequestModel
 */
interface RegisterTencentServiceRequestModel {
  notificationToken: string
  destinationIdentifier: string
  authorizeForUser: boolean
  deviceName: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.GetMetadataResponseModel
 */
interface GetMetadataResponseModel {
  metadata: PushNotificationClientMetadata
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.PushNotificationClientMetadata
 */
interface PushNotificationClientMetadata {
  notificationId: string
  type: string
  detail: Record<string, unknown> // TODO:
  fallbackDelivered: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.NotificationIdsResponseModel
 */
interface NotificationIdsResponseModel {
  ids: string[]
  statusMessage: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.MarkAsReadRequestModel
 */
interface MarkAsReadRequestModel {
  platformType:
    | 'ChromeOnDesktop'
    | 'AndroidNative'
    | 'FirefoxOnDesktop'
    | 'IOSNative'
    | 'AndroidAmazon'
    | 'IOSTencent'
    | 'AndroidTencentService'
  notificationId: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.MarkCategoryAsReadRequestModel
 */
interface MarkCategoryAsReadRequestModel {
  notificationType:
    | 'Test'
    | 'FriendRequestReceived'
    | 'FriendRequestAccepted'
    | 'PartyInviteReceived'
    | 'PartyMemberJoined'
    | 'ChatNewMessage'
    | 'PrivateMessageReceived'
    | 'UserAddedToPrivateServerWhiteList'
    | 'ConversationUniverseChanged'
    | 'TeamCreateInvite'
    | 'GameUpdate'
    | 'DeveloperMetricsAvailable'
  category: string
  latestNotificationId: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - notifications/v2/Roblox.Api.Notifications.Models.MarkInteractionRequestModel
 */
interface MarkInteractionRequestModel {
  platformType:
    | 'ChromeOnDesktop'
    | 'AndroidNative'
    | 'FirefoxOnDesktop'
    | 'IOSNative'
    | 'AndroidAmazon'
    | 'IOSTencent'
    | 'AndroidTencentService'
  notificationToken: string
  notificationId: string
  interactionType: 'Click' | 'Dismiss' | 'Action'
}

/**
 * A response model for the premium features metadata endpoint
 *
 * @privateRemarks
 * Generated using:
 *   - premiumfeatures/v1/Roblox.PremiumFeatures.Api.SubscriptionsMetadataDisplayResponse
 */
interface SubscriptionsMetadataDisplayResponse {
  expiration: Date
  computerSubscriptionRenewal: Date
  appleSubscriptionRenewal: Date
  googleSubscriptionRenewal: Date
  upgradeProduct: PremiumFeature
  numRobuxText: string
  membershipName: string
  membershipDuration: string
  premiumFeatureId: number
  stipendFrequency: string
  appleCancellationDirectionsUrl: string
  googleCancellationDirectionsUrl: string
  robuxEarnedFromSales: number
  salesEarningsVisible: boolean
  robuxEarningsVisible: boolean
  userIsSubscribedToAccountProduct: boolean
  userIsInPromotionNoCancelWindow: boolean
  promotionNoCancelTerm: number
  userRenewalIsProcessing: boolean
  userHasMultipleActiveSubscriptions: boolean
  userHasComputerSubscription: boolean
  userHasAppleAppStoreSubscription: boolean
  userHasGooglePlayStoreSubscription: boolean
  robloxSupportUrl: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - premiumfeatures/v1/Roblox.PremiumFeatures.PremiumFeature
 */
interface PremiumFeature {
  id: number
  name: string
  accountAddOnTypeID: number
  durationTypeID: number
  isRenewal: boolean
  robuxCreditQuantityTypeID: number
  robuxStipendQuantityTypeID: number
  robuxStipendFrequencyTypeID: number
  showcaseAllotmentTypeID: number
  contentPrivilegeTypeID: number
  advertisingSuppressionTypeID: number
  grantedAssetListID: number
  grantedBadgeListID: number
  grantedItemListID: number
  isAnyBuildersClub: boolean
  isAnySubscription: boolean
  isBuildersClub: boolean
  isTurboBuildersClub: boolean
  isOutrageousBuildersClub: boolean
  cacheInfo: ICacheInfo
}

/**
 * @privateRemarks
 * Generated using:
 *   - premiumfeatures/v1/Roblox.Caching.ICacheInfo
 */
interface ICacheInfo {
  cacheability: CacheabilitySettings
  entityType: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - premiumfeatures/v1/Roblox.Caching.CacheabilitySettings
 */
interface CacheabilitySettings {
  collectionsAreCacheable: boolean
  countsAreCacheable: boolean
  entityIsCacheable: boolean
  IDLookupsAreCacheable: boolean
  isNullCacheable: boolean
  hasUnqualifiedCollections: boolean
  IDLookupsAreCaseSensitive: boolean
}

/**
 * Get users presences request model
 *
 * @privateRemarks
 * Generated using:
 *   - presence/v1/Roblox.Presence.Api.Models.Request.UserPresenceRequest
 */
interface UserPresenceRequest {
  userIds: number[]
}

/**
 * User Presences Response model
 *
 * @privateRemarks
 * Generated using:
 *   - presence/v1/Roblox.Presence.Api.Models.Response.UserPresencesResponse
 */
interface UserPresencesResponse {
  userPresences: UserPresence[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - presence/v1/Roblox.Presence.Api.Models.Response.UserPresence
 */
interface UserPresence {
  userPresenceType: 'Offline' | 'Online' | 'InGame' | 'InStudio'
  lastLocation: string
  placeId: number
  rootPlaceId: number
  gameId: string
  universeId: number
  userId: number
  lastOnline: Date
}

/**
 * Request model to Register App Presence
 *
 * @privateRemarks
 * Generated using:
 *   - presence/v1/Roblox.Presence.Api.Models.Request.RegisterAppPresenceRequest
 */
interface RegisterAppPresenceRequest {
  location: string
  placeId: number
  disconnect: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - privatemessages/v1/Roblox.PrivateMessages.Api.Models.GetAnnouncementsResponse
 */
interface GetAnnouncementsResponse {
  collection: AnnouncementsDetailsResponse[]
  totalCollectionSize: number
}

/**
 * A message details response.
 *
 * @privateRemarks
 * Generated using:
 *   - privatemessages/v1/Roblox.PrivateMessages.Api.Models.AnnouncementsDetailsResponse
 */
interface AnnouncementsDetailsResponse {
  id: number
  sender: SkinnyUserResponse
  subject: string
  body: string
  created: Date
  updated: Date
}

/**
 * A message details response.
 *
 * @privateRemarks
 * Generated using:
 *   - privatemessages/v1/Roblox.PrivateMessages.Api.Models.AnnouncementsMetadataResponse
 */
interface AnnouncementsMetadataResponse {
  numOfAnnouncements: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - privatemessages/v1/Roblox.PrivateMessages.Api.Models.GetMessagesResponse
 */
interface GetMessagesResponse {
  collection: MessageDetailsResponse[]
  totalCollectionSize: number
  totalPages: number
  pageNumber: number
}

/**
 * A message details response.
 *
 * @privateRemarks
 * Generated using:
 *   - privatemessages/v1/Roblox.PrivateMessages.Api.Models.MessageDetailsResponse
 */
interface MessageDetailsResponse {
  id: number
  sender: SkinnyUserResponse
  recipient: SkinnyUserResponse
  subject: string
  body: string
  created: Date
  updated: Date
  isRead: boolean
  isSystemMessage: boolean
  isReportAbuseDisplayed: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - privatemessages/v1/Roblox.PrivateMessages.Api.Models.Messages.Response.CanMessageResponse
 */
interface CanMessageResponse {
  canMessage: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - privatemessages/v1/Roblox.PrivateMessages.Api.Models.SendMessageRequest
 */
interface SendMessageRequest {
  userId: number
  subject: string
  body: string
  recipientId: number
  replyMessageId: number
  includePreviousMessage: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - privatemessages/v1/Roblox.PrivateMessages.Api.Models.SendMessageResponse
 */
interface SendMessageResponse {
  success: boolean
  shortMessage: string
  message: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - privatemessages/v1/Roblox.PrivateMessages.Api.Models.UnreadMessagesCountResponse
 */
interface UnreadMessagesCountResponse {
  count: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - privatemessages/v1/Roblox.PrivateMessages.Api.Models.BatchMessagesRequest
 */
interface BatchMessagesRequest {
  messageIds: number[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - privatemessages/v1/Roblox.PrivateMessages.Api.Models.BatchMessagesResponse
 */
interface BatchMessagesResponse {
  failedMessages: FailedMessageResponse[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - privatemessages/v1/Roblox.PrivateMessages.Api.Models.FailedMessageResponse
 */
interface FailedMessageResponse {
  messageId: number
  errorMessage: string
}

/**
 * A request model for uploading a thumbnail for an asset.
 *
 * @privateRemarks
 * Generated using:
 *   - publish/v1/Roblox.Publish.Api.UploadThumbnailRequest
 */
interface UploadThumbnailRequest {
  files: FormDataIUploadedFile
}

/**
 * A response used when an upload has completed.
 *
 * @privateRemarks
 * Generated using:
 *   - publish/v1/Roblox.Publish.Api.UploadResponse
 */
interface UploadResponse {
  targetId: number
}

/**
 * Request model to publish an audio asset.
 *
 * @privateRemarks
 * Generated using:
 *   - publish/v1/Roblox.Publish.Api.VerifyAudioRequest
 */
interface VerifyAudioRequest {
  name: string
  file: string
  groupId: number
  paymentSource: string
  fileSize: number
  duration: number
}

/**
 * Response model for verify audio endpoint.
 *
 * @privateRemarks
 * Generated using:
 *   - publish/v1/Roblox.Publish.Api.VerifyAudioResponse
 */
interface VerifyAudioResponse {
  name: string
  price: number
  balance: number
  canAfford: boolean
}

/**
 * A request model for uploading an audio file.
 *
 * @privateRemarks
 * Generated using:
 *   - publish/v1/Roblox.Publish.Api.UploadAudioRequest
 */
interface UploadAudioRequest {
  name: string
  file: string
  groupId: number
  paymentSource: string
  estimatedFileSize: number
  estimatedDuration: number
}

/**
 * Response model for publish audio.
 *
 * @privateRemarks
 * Generated using:
 *   - publish/v1/Roblox.Publish.Api.PublishAudioResponse
 */
interface PublishAudioResponse {
  id: number
  name: string
}

/**
 * A request model for updating an item icon.
 *
 * @privateRemarks
 * Generated using:
 *   - publish/v1/Roblox.Publish.Api.UpdateIconRequest
 */
interface UpdateIconRequest {}

/**
 * A request model for uploading an item.
 *
 * @privateRemarks
 * Generated using:
 *   - publish/v1/Roblox.Publish.Api.UploadItemRequest
 */
interface UploadItemRequest {
  files: FormDataIUploadedFile
}

/**
 * @privateRemarks
 * Generated using:
 *   - publish/v1/Roblox.Publish.Api.UploadAssetResponse
 */
interface UploadAssetResponse {
  assetDetails: AssetResponseDetails[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - publish/v1/Roblox.Publish.Api.AssetResponseDetails
 */
interface AssetResponseDetails {
  assetId: number
  assetFileName: string
  uploadAssetError:
    | 'None'
    | 'InvalidAssetName'
    | 'InvalidAssetDescription'
    | 'InvalidAssetType'
    | 'InappropriateText'
    | 'WrongFileExtension'
    | 'AssetTypeNotAllowed'
    | 'UserDoesNotHavePermissionToUpload'
}

/**
 * A game response.
 *
 * @privateRemarks
 * Generated using:
 *   - share/v1/Roblox.Share.Api.GameResponse
 */
interface GameResponse {
  title: string
  description: string
}

/**
 * A profile response.
 *
 * @privateRemarks
 * Generated using:
 *   - share/v1/Roblox.Share.Api.ProfileResponse
 */
interface ProfileResponse {
  title: string
  description: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - thumbnails/v1/Roblox.Thumbs.ImageParameters
 */
interface ImageParameters {
  width: number
  height: number
  format: string
  thumbnailFormatID: number
  isCircular: boolean
  fileExtension: string
  mimeType: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - thumbnails/v1/Roblox.Web.Responses.Thumbnails.ThumbnailResponse
 */
interface ThumbnailResponse {
  targetId: number
  state: 'Error' | 'Completed' | 'InReview' | 'Pending' | 'Blocked'
  imageUrl: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - thumbnails/v1/Roblox.Thumbnails.Apis.Models.ThumbnailBatchRequest
 */
interface ThumbnailBatchRequest {
  requestId: string
  targetId: number
  alias: string
  type:
    | 'Avatar'
    | 'AvatarHeadShot'
    | 'GameIcon'
    | 'BadgeIcon'
    | 'GameThumbnail'
    | 'GamePass'
    | 'Asset'
    | 'BundleThumbnail'
    | 'Outfit'
    | 'GroupIcon'
    | 'DeveloperProduct'
    | 'AvatarBust'
    | 'AutoGeneratedAsset'
    | 'PlaceIcon'
  size: string
  isCircular: boolean
}

/**
 * @privateRemarks
 * Generated using:
 *   - thumbnails/v1/Roblox.Web.Responses.Thumbnails.ThumbnailBatchResponse
 */
interface ThumbnailBatchResponse {
  requestId: string
  errorCode: number
  errorMessage: string
  targetId: number
  state: 'Error' | 'Completed' | 'InReview' | 'Pending' | 'Blocked'
  imageUrl: string
}

/**
 * A response model for thumbnails which belong to a specific universe ID
 *
 * @privateRemarks
 * Generated using:
 *   - thumbnails/v1/Roblox.Thumbnails.Api.Models.UniverseThumbnailsResponse
 */
interface UniverseThumbnailsResponse {
  universeId: number
  error: ApiErrorModel
  thumbnails: ThumbnailResponse[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - thumbnails/v1/Roblox.Web.WebAPI.Models.ApiErrorModel
 */
interface ApiErrorModel {
  code: number
  message: string
  userFacingMessage: string
  field: string
  fieldData: Record<string, unknown> // TODO:
}

/**
 * A response model for thumbnails which belong to a specific universe ID
 *
 * @privateRemarks
 * Generated using:
 *   - thumbnails/v1/Roblox.Thumbnails.Api.Models.ThumbnailMetaDataResponse
 */
interface ThumbnailMetaDataResponse {
  isWebappUseCacheEnabled: boolean
  webappCacheExpirationTimspan: string // TODO: Documentation typo?
}

/**
 * @privateRemarks
 * Generated using:
 *   - trades/v1/Roblox.Trades.Api.TradeMetadata
 */
interface TradeMetadata {
  maxItemsPerSide: number
  minValueRatio: number
  tradeSystemMaxRobuxPercent: number
  tradeSystemRobuxFee: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - trades/v1/Roblox.Trades.Api.TradeCountResponse
 */
interface TradeCountResponse {
  count: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - trades/v1/Roblox.Trades.Api.TradeResponse
 */
interface TradeResponse {
  id: number
  user: SkinnyUserResponse
  created: Date
  expiration: Date
  isActive: boolean
  status:
    | 'Unknown'
    | 'Open'
    | 'Pending'
    | 'Completed'
    | 'Expired'
    | 'Declined'
    | 'RejectedDueToError'
    | 'Countered'
    | 'Processing'
    | 'InterventionRequired'
}

/**
 * @privateRemarks
 * Generated using:
 *   - trades/v1/Roblox.Trades.Api.TradeDetailResponse
 */
interface TradeDetailResponse {
  offers: TradeOfferResponse[]
  id: number
  user: SkinnyUserResponse
  created: Date
  expiration: Date
  isActive: boolean
  status:
    | 'Unknown'
    | 'Open'
    | 'Pending'
    | 'Completed'
    | 'Expired'
    | 'Declined'
    | 'RejectedDueToError'
    | 'Countered'
    | 'Processing'
    | 'InterventionRequired'
}

/**
 * @privateRemarks
 * Generated using:
 *   - trades/v1/Roblox.Trades.Api.TradeOfferResponse
 */
interface TradeOfferResponse {
  user: SkinnyUserResponse
  userAssets: UserAssetResponse[]
  robux: number
}

/**
 * A model containing information about a UserAsset.
 *
 * @privateRemarks
 * Generated using:
 *   - trades/v1/Roblox.Trades.Api.UserAssetResponse
 */
interface UserAssetResponse {
  id: number
  serialNumber: number
  assetId: number
  name: string
  recentAveragePrice: number
  originalPrice: number
  assetStock: number
  membershipType: 'None' | 'BC' | 'TBC' | 'OBC' | 'RobloxPremium'
}

/**
 * @privateRemarks
 * Generated using:
 *   - trades/v1/Roblox.Trades.Api.TradeRequest
 */
interface TradeRequest {
  offers: TradeOfferRequest[]
}

/**
 * @privateRemarks
 * Generated using:
 *   - trades/v1/Roblox.Trades.Api.TradeOfferRequest
 */
interface TradeOfferRequest {
  userId: number
  userAssetIds: number[]
  robux: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - trades/v1/Roblox.Trades.Api.NewTradeResponse
 */
interface NewTradeResponse {
  id: number
}

/**
 * @privateRemarks
 * Generated using:
 *   - trades/v1/Roblox.Trades.Api.CanTradeResponse
 */
interface CanTradeResponse {
  canTrade: boolean
  status:
    | 'Unknown'
    | 'CanTrade'
    | 'CannotTradeWithSelf'
    | 'SenderCannotTrade'
    | 'ReceiverCannotTrade'
    | 'SenderPrivacyTooStrict'
    | 'UsersCannotTrade'
}

/**
 * Response parameters for initiating enabling authenticator-based two step verification.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.EnableAuthenticatorResponse
 */
interface EnableAuthenticatorResponse {
  setupToken: string
  qrCodeImageUrl: string
  manualEntryKey: string
}

/**
 * Request parameters for authenticator enabling-verify.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.EnableVerifyAuthenticatorRequest
 */
interface EnableVerifyAuthenticatorRequest {
  setupToken: string
  code: string
}

/**
 * Request information needed to disable two step verification.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.DisableTwoStepVerificationRequest
 */
interface DisableTwoStepVerificationRequest {
  password: string
}

/**
 * Request parameters for verifying a two step verification code.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.VerifyCodeRequest
 */
interface VerifyCodeRequest {
  challengeId: string
  actionType: 'Unknown' | 'Login'
  code: string
}

/**
 * Result for a successful verification.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.VerifyCodeResponse
 */
interface VerifyCodeResponse {
  verificationToken: string
}

/**
 * The users two step verification configuration.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.UserConfiguration
 */
interface UserConfiguration {
  primaryMediaType: 'Email' | 'SMS' | 'Authenticator' | 'RecoveryCode'
  methods: UserConfigurationMethod[]
}

/**
 * A user configuration method option.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.UserConfigurationMethod
 */
interface UserConfigurationMethod {
  mediaType: 'Email' | 'SMS' | 'Authenticator' | 'RecoveryCode'
  enabled: boolean
  updated: Date
}

/**
 * Request parameters for sending a two step verification code.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.SendCodeRequest
 */
interface SendCodeRequest {
  challengeId: string
  actionType: 'Unknown' | 'Login'
}

/**
 * Two step verification system metadata.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.MetadataResponse
 */
interface MetadataResponse {
  twoStepVerificationEnabled: boolean
  authenticatorEnabled: boolean
  authenticatorQrCodeSize: string
  emailCodeLength: number
  authenticatorCodeLength: number
}

/**
 * Request information needed to regenerate recovery codes.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.RegenerateRecoveryCodesRequest
 */
interface RegenerateRecoveryCodesRequest {
  password: string
}

/**
 * The response for regenerating recovery codes.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.RegenerateRecoveryCodesResponse
 */
interface RegenerateRecoveryCodesResponse {
  recoveryCodes: string[]
}

/**
 * Request information needed to clear existing recovery codes.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.ClearRecoveryCodesRequest
 */
interface ClearRecoveryCodesRequest {
  password: string
}

/**
 * The response for getting the status of recovery codes for a user.
 *
 * @privateRemarks
 * Generated using:
 *   - twostepverification/v1/Roblox.TwoStepVerification.Api.RecoveryCodesStatusResponse
 */
interface RecoveryCodesStatusResponse {
  activeCount: number
  created: Date
}

/**
 * Request model for changing a display name.
 *
 * @privateRemarks
 * Generated using:
 *   - users/v1/Roblox.Users.Api.SetDisplayNameRequest
 */
interface SetDisplayNameRequest {
  newDisplayName: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - users/v1/Roblox.Users.Api.UsernameHistoryResponse
 */
interface UsernameHistoryResponse {
  name: string
}

/**
 * Request model for getting users by ids.
 *
 * @privateRemarks
 * Generated using:
 *   - users/v1/Roblox.Users.Api.MultiGetByUserIdRequest
 */
interface MultiGetByUserIdRequest {
  userIds: number[]
  excludeBannedUsers: boolean
}

/**
 * Request model for getting users by usernames.
 *
 * @privateRemarks
 * Generated using:
 *   - users/v1/Roblox.Users.Api.MultiGetByUsernameRequest
 */
interface MultiGetByUsernameRequest {
  usernames: string[]
  excludeBannedUsers: boolean
}

/**
 * A response model specific to multi-get user by name.
 *
 * @privateRemarks
 * Generated using:
 *   - users/v1/Roblox.Users.Api.MultiGetUserByNameResponse
 */
interface MultiGetUserByNameResponse {
  requestedUsername: string
  id: number
  name: string
  displayName: string
}

/**
 * A user response model specific to getting a user from user search.
 *
 * @privateRemarks
 * Generated using:
 *   - users/v1/Roblox.Users.Api.UserSearchUserResponse
 */
interface UserSearchUserResponse {
  previousUsernames: string[]
  id: number
  name: string
  displayName: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - users/v1/Roblox.Users.Api.SetUserStatusRequest
 */
interface SetUserStatusRequest {
  status: string
}

/**
 * @privateRemarks
 * Generated using:
 *   - users/v1/Roblox.Users.Api.UserStatusResponse
 */
interface UserStatusResponse {
  status: string
}
